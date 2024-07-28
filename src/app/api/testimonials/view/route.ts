import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import Testimonial from "@/models/Testimonail";

export async function GET() {
  await dbConnect();
  const data = await Testimonial.find().sort({ createdAt: -1 });
  const dataArray = data.map((data) => data.paragraph);

  return NextResponse.json({
    data: dataArray,
  });
  
}
