"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  ChevronRight,
  Plus,
  Wand2,
  FileText,
  AlertCircle,
  Loader2,
  Undo2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateStepThreeProps {
  formData: {
    topic: string;
    script: string;
    selectedNiche: string | null;
  };
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const mockScripts: Record<string, string> = {
  "scary-stories": "The wind howled through the shattered windows of Blackwood Manor. Legend says the old house breathes in rhythm with the forest, waiting for a soul brave enough to enter. Last night, that soul arrived. Little did they know, some doors aren't meant to be opened, and some secrets are better left buried in the dust of history.",
  "motivational": "They told you it was impossible. They said wait for the perfect moment. But the truth is, the perfect moment is a myth. You create your own perfection through action, through sweat, and through the refusal to quit. Every champion was once a contender who refused to give up. Today is your day to start.",
  "fun-facts": "Did you know that octopuses have three hearts? Two pump blood to the gills, while the third pumps it to the rest of the body. Even more amazing, when they swim, the heart that delivers blood to the body actually stops beating, which is why they prefer crawling over swimming!",
  "true-crime": "In the winter of 1974, a small town in Oregon was rocked by a disappearance that remains unsolved to this day. Evidence was sparse, but the clues left behind pointed to a mystery far deeper than anyone imagined. Join us as we piece together the fragments of a case that has haunted investigators for decades.",
  "wellness": "Happiness isn't a destination; it's a practice. It begins with the morning sun and the deep breath you take before the world wakes up. Modern science shows that just 10 minutes of mindfulness can rewire your brain for peace. Let's explore how you can reclaim your calm in a chaotic world.",
  "technology": "Artificial intelligence is no longer the stuff of science fiction. It's the engine driving the next industrial revolution. From curing diseases to exploring deep space, the possibilities are limited only by our imagination. But as we build the future, one question remains: can we build it with a soul?",
};

export function CreateStepThree({
  formData,
  updateFormData,
  onNext,
  onBack
}: CreateStepThreeProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const { topic, script, selectedNiche } = formData;

  const handleGenerate = () => {
    if (!topic) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const nicheKey = selectedNiche || "scary-stories";
      const generatedScript = mockScripts[nicheKey] || "This is a custom generated script for your unique topic. It focuses on the core themes you specified and provides a compelling narrative for your AI video.";
      
      updateFormData({ script: generatedScript });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900">Script Selection</h2>
        <p className="text-zinc-500">
          Give us a topic and we'll generate a professional script for your series.
        </p>
      </div>

      <div className="space-y-8">
        {/* Topic Entry */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-zinc-900 ml-1 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-600" />
            What should the video be about?
          </label>
          <div className="flex gap-3">
            <Input
              value={topic}
              onChange={(e) => updateFormData({ topic: e.target.value })}
              placeholder="e.g., The haunted history of the London Bridge"
              className="h-14 px-6 bg-zinc-50 border-zinc-100 rounded-2xl focus-visible:ring-violet-600 focus-visible:ring-offset-0 text-zinc-900"
            />
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className="h-14 px-8 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold gap-2 transition-all active:scale-95 shrink-0"
            >
              {isGenerating ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Wand2 className="h-5 w-5" />
              )}
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>

        {/* Script Editor */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <label className="text-sm font-bold text-zinc-900 flex items-center gap-2">
              <FileText className="h-4 w-4 text-violet-600" />
              Your Script
            </label>
            {script && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => updateFormData({ script: "" })}
                className="text-xs text-zinc-400 hover:text-red-500 gap-1 h-7"
              >
                <Undo2 className="h-3 w-3" />
                Clear
              </Button>
            )}
          </div>
          
          <div className="relative group">
            <Textarea
              value={script}
              onChange={(e) => updateFormData({ script: e.target.value })}
              placeholder="Your generated script will appear here. You can also type your own!"
              className="min-h-[300px] p-8 text-lg bg-zinc-50 border-zinc-100 rounded-[2rem] focus-visible:ring-violet-600 focus-visible:ring-offset-0 leading-relaxed text-zinc-700 resize-none custom-scrollbar"
            />
            {!script && !isGenerating && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-300 pointer-events-none gap-4">
                <div className="p-4 rounded-3xl bg-zinc-100/50 border border-zinc-100">
                  <Wand2 className="h-10 w-10 opacity-20" />
                </div>
                <p className="text-sm font-medium opacity-50">Nothing here yet</p>
              </div>
            )}
          </div>
          
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              Feel free to edit the generated script. Our AI will use the final version you see here for the voiceover.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
        <Button
          variant="ghost"
          size="lg"
          onClick={onBack}
          className="text-zinc-400 hover:text-zinc-900 font-bold gap-2 px-6 rounded-2xl h-14"
        >
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
              <Plus className="h-4 w-4 rotate-45" />
            </span>
            Back
          </div>
        </Button>

        <p className="text-sm text-zinc-400 font-medium hidden md:block">Step 3 of 6</p>
        
        <Button
          size="lg"
          disabled={!script || isGenerating}
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
