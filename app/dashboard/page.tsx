import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { syncUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Plus, Video, ListVideo, ArrowUpRight } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Ensure user is synced to Supabase
  await syncUser();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
          Welcome back, <span className="text-violet-600">{user.firstName || "Creator"}</span>!
        </h2>
        <p className="text-zinc-500 text-lg">
          Here's what's happening with your video series today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder Stat Cards */}
        {[
          { title: "Total Series", value: "0", icon: ListVideo, color: "text-blue-600", bg: "bg-blue-50" },
          { title: "Videos Generated", value: "0", icon: Video, iconColor: "text-violet-600", bg: "bg-violet-50" },
          { title: "Credits Used", value: "0/100", icon: ArrowUpRight, iconColor: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className="group p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm transition-all hover:shadow-md hover:border-zinc-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor || "text-zinc-600"}`} />
              </div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Lifetime</span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-extrabold text-zinc-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center p-12 rounded-[2rem] bg-white border-2 border-dashed border-zinc-200 text-center space-y-6">
        <div className="p-6 rounded-full bg-zinc-50 border border-zinc-100">
          <ListVideo className="h-12 w-12 text-zinc-300" />
        </div>
        <div className="max-w-md space-y-2">
          <h3 className="text-xl font-bold text-zinc-900">No series created yet</h3>
          <p className="text-zinc-500">
            Start your first AI video series and let Vidmax handle the hard work of generation and posting.
          </p>
        </div>
        <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 h-auto rounded-xl font-bold shadow-lg shadow-violet-500/20 gap-3 transition-transform active:scale-95">
          <Plus className="h-6 w-6" />
          Create Your First Series
        </Button>
      </div>
    </div>
  );
}
