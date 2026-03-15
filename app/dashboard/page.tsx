import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { syncUser } from "@/actions/user";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Ensure user is synced to Supabase
  await syncUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to your <span className="text-violet-500">Dashboard</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-lg text-center">
          You are successfully logged in! This is where you will manage your AI videos.
        </p>
        <div className="mt-8 p-6 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center gap-4">
          <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Your Account</p>
          <UserButton appearance={{ elements: { userButtonAvatarBox: "h-12 w-12" } }} />
        </div>
      </div>
    </div>
  );
}
