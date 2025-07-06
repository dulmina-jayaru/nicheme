"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SSOCallbackPage() {
  const router = useRouter();
  
  useEffect(() => {
    // The Clerk client-side SDK will automatically handle the callback
    // We just need to wait a moment and then redirect to dashboard
    // This is because Clerk's JS will take care of setting the session
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h1 className="text-xl font-semibold">Processing authentication...</h1>
        <p className="text-muted-foreground">You will be redirected shortly</p>
      </div>
    </div>
  );
}