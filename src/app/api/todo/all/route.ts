import { db } from '@/lib/db';
import { todos } from '@/drizzle/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  const allTodos = await db.select().from(todos);
  return NextResponse.json({ todos: allTodos });
}
