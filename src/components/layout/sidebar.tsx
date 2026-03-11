import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileSpreadsheet,
  History,
  LineChart,
  Upload,
  Users
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: BarChart3 },
  { href: "/upload-squad", label: "Upload Squad", icon: Upload },
  { href: "/matches", label: "Match History", icon: History },
  { href: "/players", label: "Player Statistics", icon: Users },
  { href: "/reports", label: "Reports", icon: FileSpreadsheet }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-black/40 p-4 text-sm text-slate-100 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <LineChart className="h-6 w-6 text-emerald-400" />
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide">
            Rugby Squad
          </div>
          <div className="text-xs text-slate-400">Manager Dashboard</div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors",
                active
                  ? "bg-emerald-500/20 text-emerald-200"
                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-4 rounded-md border border-emerald-700/40 bg-emerald-500/5 p-3 text-xs text-slate-300">
        <div className="font-semibold text-emerald-200">
          Matchday insights
        </div>
        <p className="mt-1 text-xs text-slate-400">
          Upload squads before kickoff to keep player appearance stats fully
          up to date.
        </p>
      </div>
    </aside>
  );
}

