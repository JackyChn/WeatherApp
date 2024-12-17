import React from "react";
import SearchButton from "./SearchButton";

export default function Weather() {
  return (
    <div className="w-96 h-96 bg-blue-100 bg-opacity-80 border-2 border-blue-300 rounded-xl">
      <h1 className="text-center font-semibold mt-2">
        Check weather for any city
      </h1>
      <div className="w-full flex items-center justify-center mt-6">
        <input
          required
          type="text"
          placeholder="Enter city name...."
          className="w-full max-w-[80%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <SearchButton />
      </div>
    </div>
  );
}
