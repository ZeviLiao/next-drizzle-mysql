import { db } from '@/lib/db';
import { todos } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id } = await req.json();
  await db.delete(todos).where(eq(todos.id, id));
  return NextResponse.json({ ok: true });
}
