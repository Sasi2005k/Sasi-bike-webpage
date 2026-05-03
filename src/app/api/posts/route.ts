import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';
import fs from 'fs/promises';
import path from 'path';

const LOCAL_DATA_PATH = path.join(process.cwd(), 'public', 'local_posts.json');

// Helper to manage local data
async function getLocalPosts() {
    try {
        const data = await fs.readFile(LOCAL_DATA_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function saveLocalPost(post: any) {
    const posts = await getLocalPosts();
    posts.push({ ...post, _id: Date.now().toString() });
    await fs.writeFile(LOCAL_DATA_PATH, JSON.stringify(posts, null, 2));
    return post;
}

export async function GET(request: Request) {
    try {
        const conn = await dbConnect();
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        let query: any = { isApproved: true };
        if (type) query.type = type;

        if (conn) {
            const posts = await Post.find(query).sort({ createdAt: -1 });
            return NextResponse.json(posts);
        } else {
            // Fallback to local file
            const localPosts = await getLocalPosts();
            const filtered = localPosts.filter((p: any) => !type || p.type === type);
            return NextResponse.json(filtered.reverse());
        }
    } catch (error) {
        const localPosts = await getLocalPosts();
        return NextResponse.json(localPosts.reverse());
    }
}

export async function POST(request: Request) {
    let postData: any;
    try {
        postData = await request.json();
        const conn = await dbConnect();

        if (conn) {
            try {
                const post = await Post.create(postData);
                return NextResponse.json(post);
            } catch (dbErr) {
                const localPost = await saveLocalPost(postData);
                return NextResponse.json(localPost);
            }
        } else {
            const localPost = await saveLocalPost(postData);
            return NextResponse.json(localPost);
        }
    } catch (error: any) {
        console.error("API POST Error:", error);
        // If we already have the data, try one last local save
        if (postData) {
            try {
                const localPost = await saveLocalPost(postData);
                return NextResponse.json(localPost);
            } catch (fallbackErr) {
                return NextResponse.json({ 
                    error: "Database and local storage both unavailable on this platform (Vercel). Please check MONGODB_URI." 
                }, { status: 500 });
            }
        }
        return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
}
