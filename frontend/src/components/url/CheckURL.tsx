import axios from "axios";
import { useState } from "react";

const CheckURL = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredUrl = formData.get("shortUrl");
    try {
      
      const response = await axios.get(`http://localhost:3000/api/${enteredUrl}`);
if (response.data.originalUrl) {
  window.location.href = response.data.originalUrl;
}

    
      setResult(response.data.originalUrl);
      console.log(result)
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setResult("Error: URL not found.");
      } else {
        setResult("Error: Could not find original URL.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Enter the Short URL
        </h2>
        <input
          type="text"
          name="shortUrl"
          placeholder="Enter Short URL"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
        {result && (
          <div className="mt-4 p-3 bg-blue-50 rounded text-center border border-blue-200">
            <span className="font-semibold text-blue-700">{result}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckURL;