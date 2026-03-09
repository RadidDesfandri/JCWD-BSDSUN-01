import { Search } from "lucide-react";
import { Input } from "../ui/input";

function HomeSearch() {
  return (
    <div className="p-3 border-b">
      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 transform left-3 h-5 w-5" />
        <Input placeholder="Search connect" className="rounded-full pl-10" />
      </div>
    </div>
  );
}

export default HomeSearch;
