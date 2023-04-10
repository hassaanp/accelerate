import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [textPrompt, setTextPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/response', {
        method: 'POST',
        body: JSON.stringify({ textPrompt }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 h-screen bg-white">
      <div className="mx-auto w-full">
        <Image
          className="mx-auto"
          src="zoom.svg"
          height="300"
          width="300"
          alt="zoom"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">AI help tool (PROTOTYPE)</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="text-prompt" className="mr-2">
            Enter your text prompt:
          </label>
          <input
            type="text"
            id="text-prompt"
            name="text-prompt"
            value={textPrompt}
            onChange={(event) => setTextPrompt(event.target.value)}
            className="border border-gray-300 px-2 py-1 rounded-md mr-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded-md"
          >
            Generate
          </button>
        </div>
      </form>
      {response && (
        <div className="border border-gray-300 px-4 py-2 rounded-md mt-4">
          <p className="font-medium">Generated response:</p>
          <p className="mt-1">{response}</p>
        </div>
      )}
    </div>
  );
}
