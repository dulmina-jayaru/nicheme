"use client";

import { useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Lock, Shield, Bell, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  // State variables for the settings page
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  if (!isLoaded) {
    return (
      <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <h1 className="text-xl font-semibold">Loading settings...</h1>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push("/sign-in");
    return null;
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }
    
    try {
      setIsChangingPassword(true);
      setErrorMessage("");
      setSuccessMessage("");
      
      // In a real implementation, you would use Clerk's updatePassword method
      // This is a placeholder for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrorMessage("Failed to update password. Please try again.");
      console.error("Error updating password:", error);
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, you would update the theme
  };

  const handleToggleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
    // In a real implementation, you would update the user's notification preferences
  };

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  View and manage your account details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={user.primaryEmailAddress?.emailAddress || ""}
                        className="pl-10"
                        disabled
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your email address is verified and cannot be changed.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                <Button variant="outline" onClick={() => router.push("/profile")}>
                  Edit Profile
                </Button>
                <Button variant="destructive" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                  Permanently delete your account and all associated data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. This action cannot be undone.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive">
                  Delete Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleChangePassword}>
                <CardContent className="space-y-4">
                  {errorMessage && (
                    <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                      {errorMessage}
                    </div>
                  )}
                  
                  {successMessage && (
                    <div className="rounded-md bg-green-500/15 p-3 text-sm text-green-600 dark:text-green-400">
                      {successMessage}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isChangingPassword}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isChangingPassword}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Password must be at least 8 characters long.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isChangingPassword}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isChangingPassword}>
                    {isChangingPassword ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                      </>
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Protect your account with an additional security layer.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how NicheMe looks for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {darkMode ? (
                      <Moon className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Sun className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Switch between light and dark themes.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleToggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Manage how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive updates, tips, and important information via email.
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant={emailNotifications ? "default" : "outline"}
                    onClick={handleToggleEmailNotifications}
                  >
                    {emailNotifications ? "Enabled" : "Disabled"}
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="product-updates"
                        className="h-4 w-4 rounded border-gray-300"
                        checked={emailNotifications}
                        onChange={() => {}}
                        disabled={!emailNotifications}
                      />
                      <Label htmlFor="product-updates" className="text-sm font-normal">
                        Product updates and announcements
                      </Label>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="tips-tricks"
                        className="h-4 w-4 rounded border-gray-300"
                        checked={emailNotifications}
                        onChange={() => {}}
                        disabled={!emailNotifications}
                      />
                      <Label htmlFor="tips-tricks" className="text-sm font-normal">
                        Tips and best practices
                      </Label>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="account-security"
                        className="h-4 w-4 rounded border-gray-300"
                        checked={true}
                        onChange={() => {}}
                        disabled
                      />
                      <Label htmlFor="account-security" className="text-sm font-normal">
                        Account security alerts (cannot be disabled)
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
