import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI-Powered Ideas",
    description: "Get fresh, relevant content ideas tailored to your niche",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Niche Discovery",
    description: "Find untapped opportunities in your market",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    title: "Trend Analysis",
    description: "Stay ahead with real-time content trend insights",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 21H4a2 2 0 0 1-2-2V3"/><path d="M21 3v18"/><path d="m3 3 7.5 7.5L15 6l5 5"/></svg>,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Your Creative{" "}
          <span className="relative inline-flex items-center justify-center">
            Co-pilot
            <Sparkles className="absolute -right-8 -top-4 h-6 w-6 text-yellow-500 animate-pulse" />
          </span>
        </h1>
        
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Discover endless content ideas and untapped niches with AI-powered insights.
          Perfect for creators who want to stay ahead of the curve.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
          <Button size="lg" className="font-medium">
            Start Creating <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            How It Works
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="paper-texture rounded-lg p-6 text-center transition-transform hover:scale-105"
            >
              <div className="mb-3 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
