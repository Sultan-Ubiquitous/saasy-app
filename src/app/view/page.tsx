'use client';
import axios from 'axios';
import { useState } from 'react';

export default function page() {
    const [response, setResponse] = useState<string[] | null>(null);
    const [data, setData] = useState<Boolean>(false);
    
    async function getData(){
        const response = await axios.get("/api/testimonials/view");
        console.log(response.data.data);
        setData(!data);
        setResponse(response.data.data);
    }


  return (
    <div>
    <div>
        <button onClick={getData} >Click to view all responses</button>
    </div>
    {data && (response ? (
        <ul>
            {response.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
        </ul>
    ) : (
        <p>Loading responses...</p>
    ))  }
</div>
  )
}

