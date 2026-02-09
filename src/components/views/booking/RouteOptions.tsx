import React, { useState } from 'react';
import { Leaf, Zap, PiggyBank, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import SurchargeBreakdown from './SurchargeBreakdown';

interface RouteOptionsProps {
    showSurcharges: boolean;
    setShowSurcharges: (show: boolean) => void;
    onBook: () => void;
}

const RouteOptions: React.FC<RouteOptionsProps> = ({ showSurcharges, setShowSurcharges, onBook }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const routes = [
        {
            id: 'green',
            type: 'GREEN',
            icon: Leaf,
            carrier: "Maersk (Biofuel)",
            route: "HCMC → SIN → RTM",
            transit: "32 days",
            dates: "Feb 18 → Mar 22",
            price: 3850,
            co2: "1.2t",
            co2Savings: "42% less",
            reliability: 94,
            color: "text-green-600",
            bg: "bg-green-50",
            border: "border-green-200",
            btn: "bg-green-600 hover:bg-green-700"
        },
        {
            id: 'fast',
            type: 'FAST',
            icon: Zap,
            carrier: "Hapag-Lloyd Express",
            route: "HCMC → RTM (Direct)",
            transit: "24 days",
            dates: "Feb 16 → Mar 12",
            price: 4600,
            co2: "2.1t",
            co2Savings: null,
            reliability: 91,
            color: "text-ocean",
            bg: "bg-ocean/5",
            border: "border-ocean/20",
            btn: "bg-ocean hover:bg-ocean/90"
        },
        {
            id: 'saver',
            type: 'SAVER',
            icon: PiggyBank,
            carrier: "COSCO Shipping",
            route: "HCMC → PKG → PIR → RTM",
            transit: "38 days",
            dates: "Feb 20 → Mar 30",
            price: 2950,
            co2: "1.8t",
            co2Savings: null,
            reliability: 86,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-200",
            btn: "bg-purple-600 hover:bg-purple-700"
        }
    ];

    return (
        <div className="animate-fade-in-up">
            <h3 className="text-lg font-bold text-navy-900 mb-6">Available Routes (3)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {routes.map((route) => (
                    <div
                        key={route.id}
                        className={clsx(
                            "relative bg-white rounded-xl border p-6 shadow-sm transition-all hover:shadow-md",
                            selectedOption === route.id ? "ring-2 ring-offset-2 ring-navy-900 border-transparent transform -translate-y-1" : "border-slate-200"
                        )}
                        onClick={() => {
                            setSelectedOption(route.id);
                            setShowSurcharges(true);
                        }}
                    >
                        {/* Badge */}
                        <div className={clsx("absolute top-0 right-0 px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold", route.bg, route.color)}>
                            {route.type} OPTION
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className={clsx("p-3 rounded-full", route.bg, route.color)}>
                                <route.icon size={24} />
                            </div>
                            <div className="text-2xl font-bold font-mono text-navy-900">
                                ${route.price.toLocaleString()}
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Carrier & Route</div>
                                <div className="font-semibold text-slate-800">{route.carrier}</div>
                                <div className="text-sm text-slate-500">{route.route}</div>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Transit Time</div>
                                    <div className="font-bold text-navy-900 text-lg">{route.transit}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Schedule</div>
                                    <div className="font-medium text-slate-700 text-sm">{route.dates}</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wide">Emissions</div>
                                    <div className="font-medium text-slate-700 flex items-center gap-2">
                                        {route.co2}
                                        {route.co2Savings && <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{route.co2Savings}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Reliability</div>
                                    <div className="flex gap-0.5">
                                        {[...Array(10)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={clsx(
                                                    "w-1 h-3 rounded-sm",
                                                    i < Math.floor(route.reliability / 10) ? clsx(route.bg.replace('/5', '').replace('50', '500')) : "bg-slate-200"
                                                )}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onBook();
                            }}
                            className={clsx(
                                "w-full py-3 rounded-lg text-white font-bold shadow-md transition-colors flex items-center justify-center gap-2",
                                route.btn
                            )}
                        >
                            Book This Rate <ArrowRight size={18} />
                        </button>
                    </div>
                ))}
            </div>

            {showSurcharges && <SurchargeBreakdown />}
        </div>
    );
};

export default RouteOptions;
