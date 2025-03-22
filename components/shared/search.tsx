"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Icon } from "./icons";

interface SearchProps {
  onSearch: (value: string) => void;
  initialValue?: string;
}

export default function Search({ onSearch, initialValue = "" }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  // Only run client-side code after mount
  useEffect(() => {
    setIsMounted(true);

    // Initialize search query from URL if available
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const search = urlParams.get("search") || "";
      setSearchQuery(search);
    }
  }, []);

  // Update when initialValue changes (from parent)
  useEffect(() => {
    if (initialValue !== searchQuery) {
      setSearchQuery(initialValue);
    }
  }, [initialValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Call the parent's onSearch handler
    onSearch(value);

    // Only update URL on client side
    if (isMounted && typeof window !== "undefined") {
      // Create new URLSearchParams object
      const params = new URLSearchParams(window.location.search);

      // Update or remove the search parameter
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      // Update the URL without a full page refresh
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };

  return (
    <div className="relative border border-black w-full rounded-full overflow-hidden px-4">
      <Icon
        name="searchBlack"
        className="size-4 absolute left-4 top-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full py-2 label-sm  outline-none pl-6"
      />
    </div>
  );
}
