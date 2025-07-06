import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { BarChart, LayoutDashboard, User, Settings, CreditCard } from "lucide-react";
import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { href: "/analyze", label: "Analyze", icon: <BarChart className="h-5 w-5" /> },
  { href: "/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
  { href: "/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  { href: "/credits", label: "Credits", icon: <CreditCard className="h-5 w-5" /> },
];

export default function AnalyzePage() {
  return (
    <div className="min-h-screen flex bg-[#f8f6f1] dark:bg-[#18181b]">
<aside className="fixed md:flex flex-col w-56 bg-white/80 dark:bg-zinc-900/80 border-r border-zinc-200 dark:border-zinc-800 p-6 gap-4 shadow-lg h-screen">
        <div className="mb-8 text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <BarChart className="text-indigo-500" /> Analyze
        </div>
        <nav className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium">
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
<main className="flex-1 ml-56 p-8">
        <SignedIn>
          <div className="paper-texture rounded-2xl shadow-2xl p-10 max-w-full w-full text-center bg-white/90 dark:bg-zinc-900/90 border border-zinc-100 dark:border-zinc-800">
            <h1 className="text-3xl font-bold mb-2">Analyze</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Trend analysis and insights will appear here soon.</p>
            {/* Placeholder content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow">
                <h2 className="text-xl font-semibold mb-2">Sales Data</h2>
                <p className="text-gray-500 dark:text-gray-400">Display sales data and trends here.</p>
              </div>
              <div className="bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow">
                <h2 className="text-xl font-semibold mb-2">Customer Demographics</h2>
                <p className="text-gray-500 dark:text-gray-400">Visualize customer demographics and behavior.</p>
              </div>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="p-8 text-center">
            <SignInButton />
          </div>
        </SignedOut>
      </main>
    </div>
  );
}
