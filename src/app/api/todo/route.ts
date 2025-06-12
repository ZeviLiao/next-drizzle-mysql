import { db } from '@/lib/db';
import { todos } from '@/drizzle/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { content } = await req.json();
  await db.insert(todos).values({ content });
  return NextResponse.json({ ok: true });
}
