import { NextRequest, NextResponse } from 'next/server';

import { getServicesContent, saveServicesContent } from '@/shared/lib/content/services';

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Unknown error';

export async function GET() {
  try {
    const content = await getServicesContent();

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = (await request.json()) as unknown;
    const content = await saveServicesContent(body);

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      { status: 400 }
    );
  }
}
