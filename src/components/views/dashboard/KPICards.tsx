

import { Ship, Clock, AlertTriangle, ArrowUpRight, ArrowDownRight, Package } from 'lucide-react';
import clsx from 'clsx';

const KPICards = () => {
    const kpis = [
        {
            title: "Active Shipments",
            value: "1,247",
            change: "12%",
            trend: "up",
            subtext: "842 Ocean · 289 Air · 116 Truck",
            icon: Ship,
            color: "border-l-ocean"
        },
        {
            title: "On-Time Delivery",
            value: "94.2%",
            change: "2.1%",
            trend: "up",
            subtext: "Target: 95%",
            icon: Clock,
            color: "border-l-air"
        },
        {
            title: "POs in Transit",
            value: "3,891",
            change: null,
            trend: "neutral",
            subtext: "Worth $48.2M retail value",
            icon: Package,
            color: "border-l-purple-500"
        },
        {
            title: "Exceptions Active",
            value: "23",
            change: "8",
            trend: "down", // down is good for exceptions
            subtext: "5 Critical · 11 Warning · 7 Info",
            icon: AlertTriangle,
            color: "border-l-red-500"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {kpis.map((kpi, index) => (
                <div
                    key={index}
                    className={clsx(
                        "bg-white rounded-xl p-6 shadow-sm border-l-4 hover:shadow-md transition-shadow",
                        kpi.color
                    )}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-50 rounded-lg">
                            <kpi.icon className="w-6 h-6 text-slate-600" />
                        </div>
                        {kpi.change && (
                            <div className={clsx(
                                "flex items-center text-xs font-bold px-2 py-1 rounded-full",
                                kpi.trend === "up" && kpi.title !== "Exceptions Active" ? "bg-green-100 text-green-700" :
                                    kpi.trend === "down" && kpi.title === "Exceptions Active" ? "bg-green-100 text-green-700" :
                                        "bg-red-100 text-red-700"
                            )}>
                                {kpi.trend === "up" ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                                {kpi.change}
                                <span className="ml-1 font-normal text-slate-500">vs last period</span>
                            </div>
                        )}
                    </div>

                    <h3 className="text-slate-500 text-sm font-medium mb-1">{kpi.title}</h3>
                    <div className="font-mono text-3xl font-bold text-navy-900 mb-2">{kpi.value}</div>
                    <div className="text-xs text-slate-400">{kpi.subtext}</div>
                </div>
            ))}
        </div>
    );
};

export default KPICards;
