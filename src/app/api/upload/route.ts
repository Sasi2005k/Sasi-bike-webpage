import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const filename = formData.get('filename') as string || file.name;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        try {
            // Try saving to public/images folder (works locally)
            const filePath = path.join(process.cwd(), 'public', 'images', filename);
            await fs.writeFile(filePath, buffer);
            return NextResponse.json({ success: true, path: `/images/${filename}` });
        } catch (fsError: any) {
            console.warn("File system is read-only, falling back to Base64 encoding.");
            // Fallback for Vercel: Convert to Base64
            const base64 = buffer.toString('base64');
            const type = file.type || 'image/jpeg';
            return NextResponse.json({ 
                success: true, 
                path: `data:${type};base64,${base64}`,
                isBase64: true 
            });
        }
    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
