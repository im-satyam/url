import { useState } from "react"
import AddURL from "./url/AddURL"
import CheckURL from "./url/CheckURL"
import AllURLs from "./url/AllURLs"

const URL = () => {
    const [type, setType] = useState("post")
  return (
   <>
      <nav className="flex gap-4 mb-6 justify-center mt-4 bg-gray-200 p-4 rounded-lg shadow-md">
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 
            ${type === "post" ? "bg-blue-500 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
          onClick={() => setType("post")}
        >
          Add URL
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 
            ${type === "check" ? "bg-blue-500 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
          onClick={() => setType("check")}
        >
          Check URL
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 
            ${type === "all" ? "bg-blue-500 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
          onClick={() => setType("all")}
        >
          All URLs
        </button>
      </nav>
      {type === "post" &&  <AddURL />}
      {type === "check" && <CheckURL />}
      {type === "all" && <AllURLs />}
   </>
  )
}

export default URL