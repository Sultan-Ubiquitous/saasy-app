"use client";
import { FormEvent } from "react";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [submission, setSubmission] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as any);

    try {
    const response = await axios.post("/api/testimonials/upload",formData
    );
    console.log(formData)
    setResponse(response.data.message);
      }
   catch (error: any) {
    reportError({message: error.message});
    }
  }

  return (
    <div className="flex-col justify-center items-center bg-slate-400 min-h-screen">
      <p>Upload things here</p>
      <form onSubmit={onSubmit}>
        <input type="text" name='textData' />
        <button>Upload</button>
      </form>
      {response && <p>Response: {response}!</p>}
      
    </div>
  );
}
