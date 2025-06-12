import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { todos } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    await db.delete(todos).where(eq(todos.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting todo:', error);
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
} 