import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Calendar, 
  Share2, 
  Sparkles, 
  Youtube, 
  Instagram, 
  Send, 
  Zap, 
  ArrowRight,
  BarChart3,
  Clock,
  Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-violet-500/30">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse transition-all duration-3000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 py-1 px-4 border-violet-500/30 bg-violet-500/10 text-violet-400 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Revolutionizing Video Content with AI
            </Badge>
            
            <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-500">
              Create AI Shorts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400">
                Automatically.
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700">
              VidMaxx uses advanced AI to generate high-quality short videos and 
              autoschedules them for YouTube, Instagram, TikTok, and Email. 
              Grow your audience while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <Button size="lg" className="h-14 px-8 text-lg bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-500/20 font-semibold transition-all hover:scale-105 active:scale-95">
                Start Generating Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
                View Demo
              </Button>
            </div>

            {/* Platform Badges */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 animate-in fade-in duration-1000">
              <div className="flex items-center gap-2 group cursor-default transition-all hover:opacity-100">
                <Youtube className="h-6 w-6 text-red-500" />
                <span className="font-medium">YouTube</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default transition-all hover:opacity-100">
                <Instagram className="h-6 w-6 text-pink-500" />
                <span className="font-medium">Instagram</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default transition-all hover:opacity-100 font-bold">
                <span className="text-xl italic">TikTok</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default transition-all hover:opacity-100">
                <Send className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Direct Email</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50 transition-all duration-500 group-hover:via-indigo-400"></div>
              <div className="rounded-xl bg-zinc-950 aspect-video flex items-center justify-center p-4 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-violet-500/5 transition-opacity group-hover:opacity-10"></div>
                
                {/* Simulated UI Mockup */}
                <div className="w-full h-full flex flex-col gap-6">
                  <div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="h-6 w-48 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-12 gap-4">
                    <div className="col-span-3 border-r border-white/5 p-4 flex flex-col gap-4">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-violet-600/20 border border-violet-500/30' : 'bg-white/5'}`}></div>
                      ))}
                    </div>
                    <div className="col-span-9 p-8">
                      <div className="h-8 w-64 bg-white/10 rounded-lg mb-8"></div>
                      <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="aspect-[9/16] rounded-xl bg-white/5 border border-white/10 p-2 relative group-hover:transform group-hover:scale-105 transition-transform duration-500">
                             <div className="absolute inset-0 flex items-center justify-center">
                               <Video className="h-8 w-8 text-white/20" />
                             </div>
                             <div className="absolute bottom-4 left-4 right-4 h-4 bg-white/5 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Powerful Features for Creators</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Everything you need to automate your social video presence in one intuitive SaaS application.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center mb-4 border border-violet-500/30">
                    <Zap className="text-violet-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">AI Content Generation</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Just provide a prompt or a script, and our AI will generate engaging visuals, voiceovers, and captions in minutes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-4 border border-indigo-500/30">
                    <Calendar className="text-indigo-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">Autoscheduling Pro</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Set your posting schedule once and forget it. VidMaxx automatically publishes your content at peak engagement times.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4 border border-purple-500/30">
                    <Share2 className="text-purple-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">Multi-Platform Sync</CardTitle>
                  <CardDescription className="text-zinc-400">
                    One-click distribution to YouTube Shorts, Reels, and TikTok. Format-specific optimization done automatically.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 border border-blue-500/30">
                    <BarChart3 className="text-blue-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">Advanced Analytics</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Track your growth across all platforms in a unified dashboard. See which videos perform best and why.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center mb-4 border border-pink-500/30">
                    <Clock className="text-pink-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">Time Prediction</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Our AI learns from your audience data to predict the absolute best time to post for maximum reach.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] cursor-default text-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-orange-600/20 flex items-center justify-center mb-4 border border-orange-500/30">
                    <Layers className="text-orange-500 h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">Email Campaigns</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Automatically embed and send your AI videos to your email subscribers as part of your weekly newsletter.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-violet-600 opacity-5 -z-10"></div>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Automate Your Content?</h2>
            <p className="max-w-xl mx-auto mb-10 text-zinc-400 text-lg">
              Join 5,000+ creators who use VidMaxx to generate over 100,000 videos monthly. 
              No credit card required to start.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="h-14 px-10 text-lg bg-violet-600 hover:bg-violet-700">
                 Get Started Now
               </Button>
               <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/10">
                 Contact Sales
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
