import { useState } from "react";
import { LucideSearch } from "lucide-react"; 

export default function SearchBar({ placeholder = "Search products...", className = "" }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا بعدين رح نضيف logic البحث أو رابط للصفحة
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-md bg-[#e5e5e5] dark:bg-gray-700 ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-82 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-700 dark:placeholder-gray-300 "
      />
      <button type="submit" className="ml-2">
        <LucideSearch className="w-5 h-5 text-gray-500 dark:text-gray-300" />
      </button>
    </form>
  );
}
