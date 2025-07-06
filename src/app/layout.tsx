import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NicheMe - Your Creative Co-pilot",
    template: "%s | NicheMe",
  },
  description: "Discover endless content ideas and untapped niches with AI-powered insights.",
  keywords: ["content creation", "AI", "niche discovery", "content ideas", "creators", "SaaS"],
  authors: [{ name: "NicheMe" }],
  creator: "NicheMe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
