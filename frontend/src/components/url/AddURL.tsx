import axios from "axios"
import { useState } from "react";
const AddURL = () => {
    const [shortURL, setShortURL] = useState(null)
   const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const url = (form.elements.namedItem("originalUrl") as HTMLInputElement).value;
    
    try {
      const response = await axios.post('http://localhost:3000/api/shorten', { originalUrl: url });
      console.log('Shortened URL:', response.data);
      setShortURL(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
   }; 
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Shorten Your URL</h2>
            <input
            type="url"
            name="originalUrl"
            placeholder="Enter URL to shorten"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
            />
            {shortURL && (
  <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-full text-center border border-blue-200 mb-4">
    <p className="text-lg font-semibold mb-2 text-blue-600">Shortened URL:</p>
    <a
      href={`http://localhost:3000/api/${shortURL}`}
      className="text-blue-500 font-mono break-all hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      http://localhost:3000/api/{shortURL}
    </a>
  </div>
)}


          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Shorten URL
          </button>
        </form>
      
        
        
   
<div/>
      </div>
    </>
  )
}

export default AddURL