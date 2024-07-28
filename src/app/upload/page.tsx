"use client";
import { FormEvent } from "react";
import axios from "axios";
import { useState } from "react";

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
    <div className="flex-col items-center justify-center px-5 py-5 bg-slate-400 min-h-screen">
      <p className="p-5">Upload things here</p>
      <form onSubmit={onSubmit} className="p-5">
        <input type="text" name='textData' />
        <button className=" m-5">Upload</button>
      </form>
      {response && <p>Response: {response}!</p>}
      {responseCount > 0 && <p>Responses sent: {responseCount}</p>}
      <button  className="p-5" onClick={getData}>GetThings</button>
      {things && <p>The things: {things}!</p>}
      {getCount > 0 && <p>Responses received: {getCount}</p>}
    </div>
  );
}
