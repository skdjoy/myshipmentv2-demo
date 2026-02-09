

import { TreePine, ArrowRight, Wind } from 'lucide-react';

const OffsetCTA = () => {
    return (
        <div className="bg-green-50 rounded-xl p-8 border border-green-200 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <TreePine size={240} className="text-green-800 translate-x-12 translate-y-12" />
            </div>

            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                        <LeafIcon />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">Offset your remaining 3,691 tonnes</h3>
                </div>

                <p className="text-green-800 mb-6 leading-relaxed">
                    Reach carbon neutrality for this quarter. Our portfolio includes Gold Standard verified projects supporting renewable energy in Vietnam and reforestation in Bangladesh.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-green-700/20 transition-all flex items-center justify-center gap-2">
                        Purchase Offsets ($73,820) <ArrowRight size={18} />
                    </button>
                    <button className="bg-white hover:bg-green-50 text-green-800 border border-green-200 px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
                        Download CSRD Report
                    </button>
                </div>

                <div className="mt-8 flex gap-6 text-sm font-medium text-green-700/70">
                    <span className="flex items-center gap-2"><Wind size={16} /> Vietnam Wind Farm</span>
                    <span className="flex items-center gap-2"><TreePine size={16} /> Bangladesh Mangrove</span>
                </div>
            </div>
        </div>
    );
};

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
);

export default OffsetCTA;
