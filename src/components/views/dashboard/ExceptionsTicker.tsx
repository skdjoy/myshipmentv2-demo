import { AlertCircle, Clock, Info, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const ExceptionsTicker = () => {
    const exceptions = [
        {
            type: "critical",
            title: 'Vessel "MSC Olivia" delayed 6 days',
            desc: "Affects: 12 containers · 3 POs",
            action: "View Details"
        },
        {
            type: "critical",
            title: "Customs hold on container MSCU7294",
            desc: "Reason: Missing phytosanitary certificate",
            action: "Upload Doc"
        },
        {
            type: "warning",
            title: "ISF filing deadline in 48hrs",
            desc: "5 US-bound shipments at risk",
            action: "File Now"
        },
        {
            type: "warning",
            title: 'Supplier "Pham Textiles" CRD slipped',
            desc: "Impacts season launch window",
            action: "Escalate"
        },
        {
            type: "info",
            title: "3 bookings pending approval",
            desc: "Total value: $127,400",
            action: "Review"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-navy-900">Action Items</h3>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">23 Active</span>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                {exceptions.map((item, index) => (
                    <div key={index} className="group p-4 rounded-lg border border-slate-100 hover:border-ocean/20 hover:shadow-sm transition-all bg-slate-50/50 hover:bg-white">
                        <div className="flex items-start gap-3">
                            <div className={clsx(
                                "mt-0.5",
                                item.type === "critical" ? "text-red-500" :
                                    item.type === "warning" ? "text-yellow-500" : "text-blue-500"
                            )}>
                                {item.type === "critical" ? <AlertCircle size={18} /> :
                                    item.type === "warning" ? <Clock size={18} /> : <Info size={18} />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                <button className="mt-3 text-xs font-bold text-ocean flex items-center hover:underline">
                                    {item.action} <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExceptionsTicker;
