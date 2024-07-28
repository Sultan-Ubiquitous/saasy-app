import { NextResponse } from "next/server";
import Testimonial from '@/models/Testimonail'
import {dbConnect} from '@/lib/db'


export async function POST(req: Request) {
  const formData = await req.formData();
  const textData = formData.get("textData");

  if(!textData){
    return NextResponse.json({
      message: "Error no text data"
    })
  }

  await dbConnect();

  const paragraph = new Testimonial({
    paragraph: textData
  });
  
  paragraph.save()
    .then(() => console.log('Data saved'))
    .catch((err: Error) => console.log('Error saving:', err));

  return NextResponse.json({
    message: "Success"
  })
}

export async function GET(){
  await dbConnect();
  const recentResponse = await Testimonial.find().sort({createdAt: -1}).limit(1);
  return NextResponse.json({
      data: recentResponse
  });
}