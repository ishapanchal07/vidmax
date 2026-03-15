"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Video, Menu } from "lucide-react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20">
            <Video className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">VidMaxx</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle() + " bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white"}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#pricing" className={navigationMenuTriggerStyle() + " bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white"}>
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className={navigationMenuTriggerStyle() + " bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white"}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isSignedIn ? (
            <Link href="/dashboard">
              <Button variant="ghost" className="text-zinc-400 hover:bg-white/5 hover:text-white">
                Dashboard
              </Button>
            </Link>
          ) : (
            <SignInButton mode="modal" fallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/dashboard">
              <Button variant="ghost" className="text-zinc-400 hover:bg-white/5 hover:text-white">
                Dashboard
              </Button>
            </SignInButton>
          )}
          <UserButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-black p-0 text-white">
              <div className="flex flex-col gap-6 p-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Video className="h-6 w-6 text-violet-500" />
                  <span className="text-xl font-bold">VidMaxx</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="#features" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
                    Features
                  </Link>
                  <Link href="#pricing" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
                    Pricing
                  </Link>
                  <Link href="#about" className="text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </nav>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-white">
                    {isSignedIn ? (
                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="text-zinc-400 hover:bg-white/5 hover:text-white w-full justify-start px-0">
                          Dashboard
                        </Button>
                      </Link>
                    ) : (
                      <SignInButton mode="modal" fallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/dashboard">
                        <Button variant="ghost" className="text-zinc-400 hover:bg-white/5 hover:text-white w-full justify-start px-0" onClick={() => setIsOpen(false)}>
                          Dashboard
                        </Button>
                      </SignInButton>
                    )}
                    <UserButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
