import axios from "axios";
import { useEffect, useState } from "react";

interface UrlData {
  _id: string;
  originalUrl: string;
  shortUrl: string;
}

const AllURLs = () => {
  const [urls, setUrls] = useState<UrlData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/urls");
        setUrls(response.data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">All Shortened URLs</h2>
        
        {urls.length === 0 ? (
          <p className="text-center text-gray-500">No URLs found.</p>
        ) : (
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 text-left border-b">Original URL</th>
                <th className="py-2 px-4 text-left border-b">Short URL</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b break-all">
                    <a
                      href={url.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {url.originalUrl}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={`http://localhost:3000/api/${url.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-mono hover:underline"
                    >
                      {url.shortUrl}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllURLs;
