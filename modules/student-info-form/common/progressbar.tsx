import React from "react";
import { User, GraduationCap, BookOpen, Info } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  onStepClick,
}) => {
  const icons = [
    { icon: User, label: "Personal" },
    { icon: GraduationCap, label: "Education" },
    { icon: BookOpen, label: "UG/Higher" },
    { icon: Info, label: "Additional" },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 z-0">
          <div
            className="h-full bg-gray-800 transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
          ></div>
        </div>

        {/* Steps */}
        {icons.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isClickable = stepNumber <= currentStep || isCompleted;
          const IconComponent = step.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative z-10"
            >
              <button
                onClick={() => isClickable && onStepClick(stepNumber)}
                disabled={!isClickable}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
                    : isCurrent
                      ? "bg-gray-800 text-white cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                } ${isClickable ? "hover:scale-105 hover:shadow-lg" : ""}`}
                title={`Go to ${step.label} Details`}
              >
                <IconComponent size={24} />
              </button>
              <span
                className={`mt-2 text-sm font-medium ${
                  isCompleted || isCurrent ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
