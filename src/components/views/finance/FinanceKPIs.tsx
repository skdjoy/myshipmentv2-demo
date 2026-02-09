

import { DollarSign, FileText, TrendingUp, AlertCircle } from 'lucide-react';

const FinanceKPIs = () => {
    const kpis = [
        { title: "Freight Spend MTD", value: "$4.13M", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Outstanding Invoices", value: "$892.4k", icon: FileText, color: "text-purple-600", bg: "bg-purple-50", sub: "12 invoices" },
        { title: "Avg Cost per TEU", value: "$2,340", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
        { title: "Disputes Open", value: "3", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", sub: "$14.2k value" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                        <div className="text-sm font-medium text-slate-500 mb-1">{kpi.title}</div>
                        <div className="text-2xl font-bold text-navy-900">{kpi.value}</div>
                        {kpi.sub && <div className="text-xs text-slate-400 mt-1">{kpi.sub}</div>}
                    </div>
                    <div className={`p-3 rounded-full ${kpi.bg}`}>
                        <kpi.icon size={24} className={kpi.color} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FinanceKPIs;
