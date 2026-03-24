"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Languages, 
  Mic2, 
  Play, 
  Pause,
  ChevronRight,
  Plus,
  CheckCircle2,
  Globe2,
  Volume2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Language, DeepgramVoices, FonadalabVoices } from "@/lib/voices";

interface CreateStepTwoProps {
  formData: {
    selectedLanguage: string;
    selectedVoice: string | null;
  };
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CreateStepTwo({
  formData,
  updateFormData,
  onNext,
  onBack
}: CreateStepTwoProps) {
  const { selectedLanguage, selectedVoice } = formData;
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (e: React.MouseEvent, voiceId: string, previewUrl: string) => {
    e.stopPropagation();

    if (playingVoice === voiceId) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingVoice(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(`/voice/${previewUrl}`);
      audioRef.current = audio;
      audio.play().catch(err => console.error("Error playing audio", err));
      setPlayingVoice(voiceId);
      
      audio.onended = () => {
        setPlayingVoice(null);
      };
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const currentLanguageObj = Language.find(l => l.modelLangCode === selectedLanguage) || Language[0];
  const modelNameForVoice = currentLanguageObj?.modelName;
  const availableVoices = modelNameForVoice === 'fonadalab' ? FonadalabVoices : DeepgramVoices;

  return (
    <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-12">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900">Language & Voice</h2>
        <p className="text-zinc-500">
          Select the language for your script and choose an AI voice for narration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Language Selection */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="h-5 w-5 text-violet-600" />
            <h3 className="font-bold text-zinc-900">Select Language</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {Language.map((lang) => (
              <Button
                key={lang.modelLangCode}
                variant="ghost"
                onClick={() => updateFormData({ selectedLanguage: lang.modelLangCode, selectedVoice: null })}
                className={`
                  h-14 flex items-center justify-start gap-3 px-4 rounded-2xl border-2 transition-all duration-300
                  ${selectedLanguage === lang.modelLangCode 
                    ? "border-violet-600 bg-violet-50/50 text-violet-700" 
                    : "border-zinc-50 hover:border-zinc-200 hover:bg-zinc-50/50 text-zinc-600"
                  }
                `}
              >
                <span className="text-xl">{lang.countryFlag}</span>
                <span className="font-bold truncate">{lang.language}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Voice Selection */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="h-5 w-5 text-violet-600" />
            <h3 className="font-bold text-zinc-900">Pick a Voice</h3>
          </div>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {availableVoices.map((voice) => (
              <Card
                key={voice.modelName}
                onClick={() => updateFormData({ selectedVoice: voice.modelName })}
                className={`
                  p-4 cursor-pointer transition-all duration-300 border-2 rounded-2xl relative flex items-center justify-between group
                  ${selectedVoice === voice.modelName 
                    ? "border-violet-600 bg-violet-50/50 shadow-sm" 
                    : "border-zinc-50 hover:border-zinc-200 hover:shadow-md"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    h-10 w-10 rounded-xl flex items-center justify-center transition-colors
                    ${selectedVoice === voice.modelName ? "bg-violet-600 text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200"}
                  `}>
                    <Mic2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-zinc-900 capitalize text-sm">{voice.modelName}</h4>
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-wider py-0 px-1.5 h-4 bg-zinc-100 text-zinc-500 font-bold border-none">
                        {voice.gender}
                      </Badge>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-medium capitalize mt-0.5">
                      {voice.model} • AI Narrator
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => togglePlay(e, voice.modelName, voice.preview)}
                    className={`
                      h-9 w-9 rounded-full transition-all
                      ${playingVoice === voice.modelName 
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20" 
                        : "bg-white text-zinc-400 border border-zinc-100 hover:bg-zinc-50 hover:text-violet-600"
                      }
                    `}
                  >
                    {playingVoice === voice.modelName ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </Button>
                </div>
              </Card>
            ))}
            {availableVoices.length === 0 && (
              <div className="text-center p-8 text-zinc-500 text-sm">
                No voices available for this language.
              </div>
            )}
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

        <p className="text-sm text-zinc-400 font-medium hidden md:block">Step 2 of 6</p>
        
        <Button
          size="lg"
          disabled={!selectedVoice}
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
