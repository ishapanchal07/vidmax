"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ListVideo, 
  Video, 
  BookOpen, 
  CreditCard, 
  Settings, 
  Plus, 
  Zap, 
  User 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Series",
    url: "/dashboard/series",
    icon: ListVideo,
  },
  {
    title: "Videos",
    url: "/dashboard/videos",
    icon: Video,
  },
  {
    title: "Guides",
    url: "/dashboard/guides",
    icon: BookOpen,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const footerItems = [
  {
    title: "Upgrade",
    url: "/dashboard/upgrade",
    icon: Zap,
  },
  {
    title: "Profile Settings",
    url: "/dashboard/profile",
    icon: User,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-zinc-200 bg-white text-zinc-900">
      <SidebarHeader className="h-20 flex items-center px-6 border-b border-zinc-100">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-1.5 shadow-md shadow-violet-500/10">
            <Image
              src="/logo.png"
              alt="Vidmax Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
            Vidmax
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4 py-8 flex flex-col gap-10">
        <div className="px-2">
          <Button size="lg" className="h-12 w-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 gap-3 font-bold text-base transition-all active:scale-[0.98]">
            <Plus className="h-5 w-5" />
            Create New Series
          </Button>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400 font-bold px-3 mb-4 uppercase text-[11px] tracking-[0.1em]">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`
                      w-full flex items-center gap-4 px-4 py-6 rounded-xl transition-all duration-200
                      ${pathname === item.url 
                        ? "bg-violet-50 text-violet-600 font-bold shadow-sm ring-1 ring-violet-100" 
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                      }
                    `}
                  >
                    <Link href={item.url} className="flex items-center gap-4">
                      <item.icon className={`h-5 w-5 ${pathname === item.url ? "text-violet-600" : "text-zinc-400"}`} />
                      <span className="text-[15px]">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t border-zinc-100 bg-zinc-50/50">
        <SidebarMenu className="gap-2">
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-all duration-200"
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon className="h-5 w-5 text-zinc-400" />
                  <span className="text-[15px]">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
