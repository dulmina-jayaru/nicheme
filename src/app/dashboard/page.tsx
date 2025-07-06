import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Sparkles, LayoutDashboard, User, Settings, CreditCard, BarChart } from "lucide-react";
import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { href: "/analyze", label: "Analyze", icon: <BarChart className="h-5 w-5" /> },
  { href: "/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
  { href: "/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  { href: "/credits", label: "Credits", icon: <CreditCard className="h-5 w-5" /> },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-[#f8f6f1] dark:bg-[#18181b]">
<aside className="fixed md:flex flex-col w-56 bg-white/80 dark:bg-zinc-900/80 border-r border-zinc-200 dark:border-zinc-800 p-6 gap-4 shadow-lg h-screen">
        <div className="mb-8 text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <Sparkles className="text-yellow-500 animate-pulse" /> NicheMe
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
            <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard!</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Start exploring ideas, trends, and your creative journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="flex flex-col items-center gap-2 bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 w-full shadow hover:scale-105 transition-transform">
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
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
