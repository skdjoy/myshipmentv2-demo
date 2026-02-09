import React from 'react';
import { Check, Circle } from 'lucide-react';
import clsx from 'clsx';

interface MilestoneTrackerProps {
    milestones: {
        poReceived: string | null;
        fabricSourced: string | null;
        cuttingStarted: string | null;
        sewingStarted: string | null;
        qcPassed: string | null;
        packed: string | null;
        shipped: string | null;
    };
}

const VisualMilestoneTracker: React.FC<MilestoneTrackerProps> = ({ milestones }) => {
    const steps = [
        { key: 'poReceived', label: 'PO Received' },
        { key: 'fabricSourced', label: 'Fabric Sourced' },
        { key: 'cuttingStarted', label: 'Cutting' },
        { key: 'sewingStarted', label: 'Sewing' },
        { key: 'qcPassed', label: 'QC Passed' },
        { key: 'packed', label: 'Packed' },
        { key: 'shipped', label: 'Shipped' },
    ];

    // Determine current step index (last one with a date)
    const currentStepIndex = steps.map(s => milestones[s.key as keyof typeof milestones]).lastIndexOf([...Object.values(milestones)].filter(v => v !== null).pop() as string) ||
        steps.reduce((acc, step, idx) => milestones[step.key as keyof typeof milestones] ? idx : acc, -1);

    return (
        <div className="w-full py-4">
            <div className="relative flex items-center justify-between">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full z-0"></div>

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-ocean rounded-full transition-all duration-1000 z-0"
                    style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                ></div>

                {steps.map((step, index) => {
                    const isCompleted = index <= currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const date = milestones[step.key as keyof typeof milestones];

                    return (
                        <div key={step.key} className="relative z-10 flex flex-col items-center group">
                            <div
                                className={clsx(
                                    "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white",
                                    isCompleted ? "border-ocean text-ocean" : "border-slate-200 text-slate-300",
                                    isCurrent && "ring-4 ring-ocean/20 scale-110"
                                )}
                            >
                                {isCompleted ? <Check size={14} strokeWidth={3} /> : <Circle size={10} fill="currentColor" className="text-slate-200" />}
                            </div>

                            <div className="absolute top-10 flex flex-col items-center w-32 text-center transition-all duration-300">
                                <span className={clsx(
                                    "text-xs font-semibold mb-0.5",
                                    isCompleted ? "text-navy-900" : "text-slate-400"
                                )}>
                                    {step.label}
                                </span>
                                {date && (
                                    <span className="text-[10px] text-slate-500 font-mono tracking-tight bg-slate-50 px-1.5 py-0.5 rounded">
                                        {date}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VisualMilestoneTracker;
