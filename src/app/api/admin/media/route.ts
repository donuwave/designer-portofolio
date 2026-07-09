import { NextRequest, NextResponse } from 'next/server';

import { deleteMediaFile, getMediaLibrary, uploadMediaFiles } from '@/shared/lib/media-library';

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Unknown error';

export async function GET() {
  try {
    const mediaLibrary = await getMediaLibrary();

    return NextResponse.json(mediaLibrary);
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData
      .getAll('files')
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length === 0) {
      return NextResponse.json(
        {
          message: 'Не выбраны файлы для загрузки',
        },
        { status: 400 }
      );
    }

    await uploadMediaFiles(files);
    const mediaLibrary = await getMediaLibrary();

    return NextResponse.json(mediaLibrary);
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const assetPath = request.nextUrl.searchParams.get('path')?.trim() ?? '';

    if (!assetPath) {
      return NextResponse.json(
        {
          message: 'Не передан путь к файлу',
        },
        { status: 400 }
      );
    }

    await deleteMediaFile(assetPath);
    const mediaLibrary = await getMediaLibrary();

    return NextResponse.json(mediaLibrary);
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 400 }
    );
  }
}
