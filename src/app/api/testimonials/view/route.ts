import fs from "fs";
import { NextResponse } from "next/server";

export function GET() {
  const data = fs.readFileSync('src/data/data.txt', 'utf-8');
  const dataArray = data.trim().split(',').filter(Boolean);
  const responseData = dataArray.map((data) => data.trim());
  return NextResponse.json({
    data: responseData
  });
}
