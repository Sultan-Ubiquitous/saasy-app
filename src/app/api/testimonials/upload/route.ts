import { NextResponse } from "next/server";
import fs from "fs";


let response: Record<string, any> = {};

export async function POST(req: Request) {
  const formData = await req.formData();
  const textData = formData.get("textData");

  if(!textData){
    return NextResponse.json({
      message: "Error no text data"
    })
  }

  response.textData = textData;

  const filePath = 'src/data/data.json'
  fs.writeFileSync(filePath, JSON.stringify(response))

  return NextResponse.json({
    message: "Success"
  })
}

export function GET(){
  return NextResponse.json({
    message: response
  });
}