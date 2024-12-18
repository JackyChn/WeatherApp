import React from "react";

export default function Spinner() {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-900 border-t-transparent"
        style={{
          borderTopColor: "transparent",
          borderRadius: "50%",
        }}
      ></div>
      <span className="mt-4 text-blue-900">Searching...</span>
    </div>
  );
}
