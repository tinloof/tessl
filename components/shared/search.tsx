import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams ? searchParams.get("search") || "" : ""
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Only run on client side
    if (typeof window !== "undefined") {
      // Create new URLSearchParams object
      const params = new URLSearchParams(searchParams?.toString() || "");

      // Update or remove the search parameter
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      // Update the URL with the new search parameter
      const newUrl = `?${params.toString()}`;
      router.push(newUrl);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className="w-full p-2 border rounded-md"
    />
  );
}
