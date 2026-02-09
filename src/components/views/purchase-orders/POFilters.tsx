

import { Filter, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const POFilters = () => {
    const filters = [
        { label: "Status", options: ["All", "Open", "In Production", "Ready to Ship", "In Transit", "Delivered"], active: "All" },
        { label: "Supplier", options: ["All", "Pham Textiles", "Jiangsu Garments", "BDG Knitwear", "Shenzen Electronics"], active: "All" },
        { label: "Season", options: ["All", "SS26", "AW25", "SS25"], active: "All" }
    ];

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center text-slate-500 mr-2">
                <Filter size={20} className="mr-2" />
                <span className="font-semibold text-sm">Filters:</span>
            </div>

            {filters.map((filter, index) => (
                <div key={index} className="relative group">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors">
                        <span className="text-slate-500">{filter.label}:</span>
                        <span className="text-navy-900">{filter.active}</span>
                        <ChevronDown size={14} className="text-slate-400" />
                    </button>

                    {/* Mock Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 p-1 hidden group-hover:block z-20 animate-fade-in-up">
                        {filter.options.map((option, i) => (
                            <button
                                key={i}
                                className={clsx(
                                    "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                                    option === filter.active ? "bg-ocean/10 text-ocean font-medium" : "text-slate-600 hover:bg-slate-50"
                                )}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <div className="ml-auto">
                <button className="text-sm text-ocean font-medium hover:underline">Clear all</button>
            </div>
        </div>
    );
};

export default POFilters;
