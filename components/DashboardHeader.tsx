"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-20 shrink-0 items-center justify-between border-b border-zinc-200 bg-white/80 px-8 backdrop-blur-md">
      <div className="flex items-center gap-5">
        <SidebarTrigger className="text-zinc-500 hover:text-zinc-900 transition-colors" />
        <Separator orientation="vertical" className="h-6 bg-zinc-200" />
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-zinc-900">Dashboard</h1>
          <p className="text-xs text-zinc-500">Welcome back to Vidmax</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "h-10 w-10 ring-2 ring-zinc-100 shadow-sm transition-transform hover:scale-105",
              userButtonPopoverCard: "bg-white border border-zinc-200 shadow-xl",
              userButtonPopoverActionButton: "hover:bg-zinc-50",
              userButtonPopoverActionButtonText: "text-zinc-700 font-medium",
            }
          }}
        />
      </div>
    </header>
  );
}
