\"use client\";

import { useState } from "react";
import { Search, SunMedium, MoonStar, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Topbar() {
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState("");

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-black/40 px-4 py-3 md:px-6">
      <div className="flex flex-1 items-center gap-2 md:gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            className="h-9 w-full rounded-md border border-slate-700 bg-slate-900/70 pl-8 pr-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Quick search players, matches, opponents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="ml-3 flex items-center gap-2 md:gap-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <MoonStar className="h-4 w-4" />
          ) : (
            <SunMedium className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="hidden items-center gap-2 border-slate-700 bg-slate-900/60 text-xs text-slate-100 hover:bg-slate-800 md:inline-flex"
        >
          <User className="h-3.5 w-3.5" />
          Manager
        </Button>
      </div>
    </header>
  );
}

