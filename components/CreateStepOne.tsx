"use client";

import React from "react";
import { 
  Ghost, 
  Flame, 
  Lightbulb, 
  Skull, 
  Heart, 
  Cpu, 
  ChevronRight,
  Plus,
  Sparkles,
  Search,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const niches = [
  {
    id: "scary-stories",
    title: "Scary Stories",
    description: "Chilling tales from the shadows of history.",
    icon: Ghost,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "motivational",
    title: "Motivational",
    description: "Powerful stories to inspire and drive ambition.",
    icon: Flame,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "fun-facts",
    title: "Fun Facts",
    description: "Mind-blowing facts that will surprise and educate.",
    icon: Lightbulb,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "true-crime",
    title: "True Crime",
    description: "Deep dives into mysterious and unsolved cases.",
    icon: Skull,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "wellness",
    title: "Health & Wellness",
    description: "Tips and stories for a healthier, happier life.",
    icon: Heart,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "technology",
    title: "Technology",
    description: "Exploring the cutting edge of human innovation.",
    icon: Cpu,
    color: "bg-blue-100 text-blue-600",
  },
];

interface CreateStepOneProps {
  formData: {
    nicheType: "available" | "custom";
    selectedNiche: string | null;
    customNiche: string;
  };
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CreateStepOne({
  formData,
  updateFormData,
  onNext,
  onBack
}: CreateStepOneProps) {
  const { nicheType, selectedNiche, customNiche } = formData;
  return (
    <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900">Choose your niche</h2>
        <p className="text-zinc-500">
          Select an existing niche or create your own custom category.
        </p>
      </div>

      {/* Niche Type Toggle */}
      <div className="flex p-1.5 bg-zinc-100 rounded-2xl w-fit">
        <Button
          variant="ghost"
          onClick={() => updateFormData({ nicheType: "available" })}
          className={`
            rounded-xl px-8 py-2 font-bold transition-all duration-300
            ${nicheType === "available" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"}
          `}
        >
          Available Niche
        </Button>
        <Button
          variant="ghost"
          onClick={() => updateFormData({ nicheType: "custom" })}
          className={`
            rounded-xl px-8 py-2 font-bold transition-all duration-300
            ${nicheType === "custom" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"}
          `}
        >
          Custom Niche
        </Button>
      </div>

      {nicheType === "available" ? (
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input 
              key="search-niche"
              className="pl-11 h-12 bg-zinc-50 border-zinc-200 rounded-xl focus-visible:ring-violet-600 focus-visible:ring-offset-0" 
              placeholder="Search niches..." 
            />
          </div>
          
          {/* Niches List Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {niches.map((niche) => (
              <Card
                key={niche.id}
                onClick={() => updateFormData({ selectedNiche: niche.id })}
                className={`
                  p-6 cursor-pointer transition-all duration-300 border-2 rounded-3xl relative overflow-hidden group
                  ${selectedNiche === niche.id 
                    ? "border-violet-600 bg-violet-50/50" 
                    : "border-zinc-100 hover:border-zinc-200 hover:shadow-md"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${niche.color} transition-transform duration-300 group-hover:scale-110`}>
                    <niche.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-zinc-900">{niche.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {niche.description}
                    </p>
                  </div>
                </div>
                {selectedNiche === niche.id && (
                  <div className="absolute top-4 right-4 text-violet-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-900 ml-1">What's your custom niche?</label>
            <Input
              key="custom-niche"
              value={customNiche || ""}
              onChange={(e) => updateFormData({ customNiche: e.target.value })}
              placeholder="e.g., Cooking Tips for Busy Parents"
              className="h-16 px-6 text-lg bg-zinc-50 border-zinc-200 rounded-2xl focus-visible:ring-violet-600 focus-visible:ring-offset-0"
            />
          </div>
          <div className="p-6 rounded-2xl bg-violet-50 border border-violet-100 flex items-start gap-4">
            <Sparkles className="h-6 w-6 text-violet-600 shrink-0 mt-1" />
            <p className="text-sm text-violet-700 leading-relaxed">
              Vidmax AI can generate content for any niche you imagine. Be specific for the best results!
            </p>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
        <Button
          variant="ghost"
          size="lg"
          onClick={onBack}
          className="text-zinc-400 hover:text-zinc-900 font-bold gap-2 px-6 rounded-2xl h-14"
        >
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-100">
              <Plus className="h-4 w-4 rotate-45" />
            </span>
            Back
          </div>
        </Button>

        <p className="text-sm text-zinc-400 font-medium hidden md:block">Step 1 of 6</p>
        
        <Button
          size="lg"
          disabled={!selectedNiche && !customNiche}
          onClick={onNext}
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-2xl px-10 py-6 h-14 font-bold shadow-lg shadow-violet-500/20 group transition-all active:scale-95"
        >
          Continue
          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
