import { Leaf, Award, Scale, TrendingDown } from 'lucide-react';

const SustainabilityKPIs = () => {
    const kpis = [
        { title: "Total CO2e (YTD)", value: "4,891t", icon: TrendingDown, color: "text-red-400", bg: "bg-red-50", sub: "Scope 3 Emissions" },
        { title: "Emission Intensity", value: "42.3g", unit: "/t-km", icon: Scale, color: "text-blue-500", bg: "bg-blue-50", sub: "Target: 40.0g" },
        { title: "Offsets Purchased", value: "24.5%", icon: Leaf, color: "text-green-600", bg: "bg-green-50", sub: "1,200 tonnes" },
        { title: "GLEC Accredited", value: "Active", icon: Award, color: "text-ocean", bg: "bg-ocean/10", sub: "ISO 14083 Compliant" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className={`absolute top-0 right-0 p-4 rounded-bl-3xl ${kpi.bg}`}>
                        <kpi.icon size={24} className={kpi.color} />
                    </div>

                    <div>
                        <div className="text-sm font-medium text-slate-500 mb-2">{kpi.title}</div>
                        <div className="text-3xl font-bold text-navy-900 flex items-baseline gap-1">
                            {kpi.value}
                            {kpi.unit && <span className="text-sm font-medium text-slate-400">{kpi.unit}</span>}
                        </div>
                        <div className="text-xs text-slate-400 mt-2 font-medium">{kpi.sub}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SustainabilityKPIs;
