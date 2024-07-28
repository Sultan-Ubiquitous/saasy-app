"use client";
import { FormEvent } from "react";
import axios from "axios";
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [things, setThings] = useState<string | null>(null);
  const [getCount, setgetCount] = useState<number>(0);
  const [responseCount, setResponseCount] = useState<number>(0);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as any);

    try {
    const response = await axios.post("/api/testimonials/upload",formData
    );

    setResponse(response.data.message);
    setResponseCount(responseCount + 1);
      }
   catch (error: any) {
    reportError({message: error.message});
    }
  }

  async function getData(){
    try{
      const response = await axios.get("/api/testimonials/upload");
      setThings(response.data.data);
      setgetCount(getCount + 1);
      
    } catch (error: any) {
      reportError({message: error.message});
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-5 ">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">Upload Things Here</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center w-full max-w-md py-3" >
        <input type="text" name='textData' className="w-full p-2 mb-2 border border-gray-300 rounded" />
        <Button label='Upload' onClick={()=>{}}  ></Button>
      </form>
      {response && <p className="mt-5 text-green-600" >Response: {response}!</p>}
      {responseCount > 0 && <p className="mt-2 text-gray-500 pb-3" >Responses sent: {responseCount}</p>}
      <Button onClick={getData} label='Get Things'></Button>
      {things && <p className="mt-5 text-green-600" >The things: {things}!</p>}
      {getCount > 0 && <p className="mt-2 text-gray-500 pb-3" >Responses received: {getCount}</p>}
    </div>
  );
}
