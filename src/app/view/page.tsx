'use client';
import axios from 'axios';
import { useState } from 'react';
import Button from '@/components/Button';

export default function page() {
    const [response, setResponse] = useState<string[] | null>(null);
    const [data, setData] = useState<Boolean>(false);
    
    async function getData(){
        const response = await axios.get("/api/testimonials/view");
        setData(!data);
        setResponse(response.data.data);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-5" >
    <div className='py-4'>
        <Button onClick={getData} label='Click to view all responses'></Button>
    </div>
    {data && (response ? (
        <ul className="w-full max-w-md" >
            {response.map((data, index) => (
                <li key={index} className="p-2 mb-2 border border-gray-300 rounded">{data}</li>
            ))}
        </ul>
    ) : (
        <p className="text-gray-200">Loading responses...</p>
    ))  }
</div>
  )
}

