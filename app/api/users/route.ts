import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/app/lib/db"; 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password, phone } = body;

    const [result] = await pool.query(
      `INSERT INTO users (first_name, last_name, email, password, phone)
       VALUES (?, ?, ?, ?, ?)`,
      [firstName, lastName, email, password, phone]
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
