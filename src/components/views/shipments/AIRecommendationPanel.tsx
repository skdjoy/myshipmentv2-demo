

import { Zap, Clock, Divide } from 'lucide-react';

const AIRecommendationPanel = () => {
    return (
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 h-full">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <Zap size={18} className="text-white" fill="currentColor" />
                </div>
                <div>
                    <h4 className="font-bold text-navy-900">AI Robo-Advisor</h4>
                    <p className="text-xs text-slate-500">3 optimized solutions found</p>
                </div>
            </div>

            <div className="space-y-3">
                {/* Option A */}
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Option A: Wait</span>
                        <span className="text-green-600 text-xs font-bold">+$0.00</span>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                        <Clock size={14} className="text-slate-400 mt-0.5" />
                        <div className="text-sm text-slate-700">
                            <span className="font-semibold">New Delivery: Mar 08.</span> <br />
                            <span className="text-red-500 text-xs">Risk: Misses spring launch by 3 days.</span>
                        </div>
                    </div>
                </div>

                {/* Option B */}
                <div className="bg-white p-3 rounded-lg border border-ocean/30 shadow-sm ring-1 ring-ocean/10 hover:ring-ocean/30 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-ocean/10 to-transparent -mr-8 -mt-8 rounded-full"></div>

                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-ocean/10 text-ocean text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Option B: Expedite Air</span>
                        <span className="text-slate-600 text-xs font-bold">+$18,400</span>
                    </div>
                    <div className="flex items-start gap-2 mb-3">
                        <Zap size={14} className="text-ocean mt-0.5" fill="currentColor" />
                        <div className="text-sm text-slate-700">
                            <span className="font-semibold">Delivery: Feb 18.</span> <br />
                            <span className="text-green-600 text-xs">100% units arrive for launch.</span>
                        </div>
                    </div>
                    <button className="w-full py-1.5 bg-ocean text-white text-xs font-bold rounded shadow-sm hover:bg-ocean/90 transition-colors">Select Option B</button>
                </div>

                {/* Option C */}
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Option C: Split</span>
                        <span className="text-slate-600 text-xs font-bold">+$4,600</span>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                        <Divide size={14} className="text-slate-400 mt-0.5" />
                        <div className="text-sm text-slate-700">
                            <span className="font-semibold">Air 3k units · Sea 9k units.</span> <br />
                            <span className="text-green-600 text-xs">Partial stock for launch day.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIRecommendationPanel;
