

import clsx from 'clsx';

const ShipmentFilters = () => {
    const statuses = [
        { label: "All", count: 1247, active: true },
        { label: "In Transit", count: 892, active: false },
        { label: "At Origin", count: 198, active: false },
        { label: "Customs", count: 47, active: false },
        { label: "Delivered", count: 94, active: false },
        { label: "Exception", count: 16, active: false, alert: true },
    ];

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {statuses.map((status, index) => (
                <button
                    key={index}
                    className={clsx(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm",
                        status.active
                            ? "bg-navy-900 text-white shadow-md shadow-navy-900/20 ring-2 ring-navy-900 ring-offset-2"
                            : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200",
                        status.alert && !status.active && "text-red-600 bg-red-50 border-red-200 hover:bg-red-100"
                    )}
                >
                    {status.label}
                    <span className={clsx(
                        "ml-2 px-1.5 py-0.5 rounded-full text-xs",
                        status.active ? "bg-white/20 text-white" :
                            status.alert ? "bg-red-200 text-red-800" : "bg-slate-100 text-slate-500"
                    )}>
                        {status.count}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default ShipmentFilters;
