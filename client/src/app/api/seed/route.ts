import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET() {
    try {
        await dbConnect();
        
        // Clear existing posts (optional)
        // await Post.deleteMany({});

        const seedPosts = [
            {
              title: 'Midnight Scrambler',
              description: 'Custom matte black finish with scrambler bars.',
              images: ['/images/modified.png'],
              type: 'modification',
              category: 'Paint',
              cost: 450,
              user: 'Rider_007',
            },
            {
                title: 'Himalayan Escape',
                description: 'A 500km journey through the mountains.',
                images: ['/images/ride.png'],
                type: 'ride_story',
                category: 'Touring',
                user: 'HunterKing',
            },
            {
                title: 'Stock Hunter 350',
                description: 'The pure essence of the Hunter 350.',
                images: ['/images/hero.png'],
                type: 'gallery',
                category: 'Stock',
                user: 'Official_RE',
            }
        ];

        const createdPosts = await Post.insertMany(seedPosts);
        return NextResponse.json({ message: 'Database seeded successfully', count: createdPosts.length });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
