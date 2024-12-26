import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex w-full sm:flex-1 items-center gap-2 px-4 border rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-slate-900">
      <SearchIcon className="text-slate-500" />
      <Input
        placeholder="Search by name, email, or status"
        className="flex-1 border-none outline-none focus-visible:ring-0 placeholder-gray-400"
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
