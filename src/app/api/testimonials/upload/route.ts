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

  const filePath = 'src/data/data.txt'
  fs.appendFileSync(filePath, `${textData},\n`, {flag: 'a'});

  return NextResponse.json({
    message: "Success"
  })
}

export function GET(){
  const data = fs.readFileSync('src/data/data.txt', 'utf-8');
  const dataArray = data.trim().split(',').filter(Boolean);
  const recentResponse = dataArray[dataArray.length - 1].trim();
  return NextResponse.json({
      data: recentResponse
  });
}