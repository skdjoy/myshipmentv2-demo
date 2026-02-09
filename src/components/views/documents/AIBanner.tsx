

import { ScanText, ChevronRight, FileCheck } from 'lucide-react';

const AIBanner = () => {
    return (
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-xl p-6 mb-8 text-white relative overflow-hidden shadow-lg shadow-navy-900/10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ocean/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 shadow-inner">
                        <ScanText size={32} className="text-ocean" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg">AI Document Processing Active</h3>
                            <span className="bg-ocean text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">LIVE</span>
                        </div>
                        <p className="text-slate-300 text-sm max-w-xl">
                            847 documents auto-processed this month. 12,400 data fields extracted with 99.2% accuracy.
                            Average processing time: 4.3 seconds per document.
                        </p>
                        <div className="flex gap-4 mt-3 text-xs font-mono text-ocean">
                            <span className="flex items-center gap-1"><FileCheck size={12} /> Weights</span>
                            <span className="flex items-center gap-1"><FileCheck size={12} /> Seal Numbers</span>
                            <span className="flex items-center gap-1"><FileCheck size={12} /> HTS Codes</span>
                            <span className="flex items-center gap-1"><FileCheck size={12} /> Port Codes</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-medium transition-colors">
                        View Analytics
                    </button>
                    <button className="px-4 py-2 bg-ocean hover:bg-ocean/90 text-white rounded-lg text-sm font-bold shadow-lg shadow-ocean/30 transition-colors flex items-center gap-2">
                        Upload Documents <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIBanner;
