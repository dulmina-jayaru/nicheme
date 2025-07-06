"use client";

import { useEffect, useState } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SSOCallbackPage() {
  const router = useRouter();
  const { isLoaded: isSignInLoaded, signIn } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp } = useSignUp();
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!isSignInLoaded || !isSignUpLoaded || !signIn || !signUp) return;
    
    async function handleCallback() {
      try {
        
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } catch (err) {
        console.error("Error handling OAuth callback:", err);
        setError("Authentication failed. Please try again.");
        
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      }
    }
    
    handleCallback();
  }, [isSignInLoaded, isSignUpLoaded, router, signIn, signUp]);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <h1 className="text-xl font-semibold">Processing authentication...</h1>
        <p className="text-muted-foreground">You will be redirected shortly</p>
        
        {error && (
          <div className="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}