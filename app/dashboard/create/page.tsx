"use client";

import React, { useState } from "react";
import { 
  CheckCircle2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CreateStepOne } from "@/components/CreateStepOne";
import { CreateStepTwo } from "@/components/CreateStepTwo";
import { CreateStepThree } from "@/components/CreateStepThree";

const steps = [
  "Niche",
  "Voice",
  "Script",
  "Style",
  "Music",
  "Export"
];

export default function CreateSeriesPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Global Form State
  const [formData, setFormData] = useState({
    nicheType: "available" as "available" | "custom",
    selectedNiche: null as string | null,
    customNiche: "",
    selectedLanguage: "en",
    selectedVoice: null as string | null,
    script: "",
    topic: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Stepper Header */}
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            Create Your <span className="text-violet-600">Series</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Follow the steps to generate your AI video series.
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="relative pt-8 pb-4">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-zinc-100 -translate-y-1/2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-violet-600 transition-all duration-500 ease-in-out rounded-full"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
          <div className="relative flex justify-between items-center w-full">
            {steps.map((step, index) => {
              const stepNum = index + 1;
              const isActive = stepNum <= currentStep;
              const isCurrent = stepNum === currentStep;

              return (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div 
                    className={`
                      w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 z-10
                      ${isActive ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20" : "bg-white text-zinc-400 border border-zinc-200"}
                      ${isCurrent ? "scale-110 ring-4 ring-violet-100" : ""}
                    `}
                  >
                    {isActive && stepNum < currentStep ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-bold">{stepNum}</span>
                    )}
                  </div>
                  <span className={`text-xs font-bold tracking-wider uppercase ${isCurrent ? "text-violet-600" : "text-zinc-400"}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Rendering */}
      {currentStep === 1 && (
        <CreateStepOne 
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNextStep}
          onBack={handleBack}
        />
      )}

      {currentStep === 2 && (
        <CreateStepTwo
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNextStep}
          onBack={handleBack}
        />
      )}

      {currentStep === 3 && (
        <CreateStepThree
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNextStep}
          onBack={handleBack}
        />
      )}

      {currentStep > 3 && (
        <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-12 text-center space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">Step {currentStep}: Ready to implement</h2>
          <p className="text-zinc-500">
            This part of the form is coming soon!
          </p>
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="rounded-xl"
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
}
