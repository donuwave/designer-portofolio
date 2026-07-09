import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { NextRequest, NextResponse } from 'next/server';

import { resolveUploadFilePath } from '@/shared/lib/storage';

const contentTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ segments: string[] }> }
) {
  try {
    const { segments } = await context.params;
    const filePath = resolveUploadFilePath(segments);
    const extension = path.extname(filePath).toLowerCase();
    const file = await readFile(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
