"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { Search } from "lucide-react";

export default function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <button
        className="ml-2 px-2 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        onClick={onClick}
      >
        <Search />
      </button>
    </>
  );
}
