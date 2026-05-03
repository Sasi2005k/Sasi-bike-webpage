import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET(request: Request) {
    try {
        const conn = await dbConnect();
        if (!conn) {
            return NextResponse.json([]); // Return empty array if no DB connection
        }

        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        
        let query: any = { isApproved: true };
        if (type) query.type = type;

        const posts = await Post.find(query).sort({ createdAt: -1 });
        return NextResponse.json(Array.isArray(posts) ? posts : []);
    } catch (error: any) {
        console.error("API Error:", error);
        return NextResponse.json([]); // Return empty array on error to prevent UI crash
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const newPost = await Post.create(body);
        return NextResponse.json(newPost, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
