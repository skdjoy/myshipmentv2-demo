import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreHorizontal, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';
import TrackingTimeline from './TrackingTimeline';
import AIRecommendationPanel from './AIRecommendationPanel';

const ShipmentTable = () => {
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const shipments = [
        {
            id: "SHP-2026-00891",
            bookingRef: "BK-2024-8801",
            container: "MSCU7294561",
            vessel: "MSC Olivia",
            carrier: "MSC",
            origin: "Shanghai",
            destination: "Rotterdam",
            departure: "2026-01-28",
            carrierETA: "2026-02-25",
            mghPredictedETA: "2026-03-02",
            status: "In Transit",
            exception: "DELAYED — Suez Canal",
            containers: 3,
            po: "PO-2025-43205",
            commodity: "Men's Down Jacket"
        },
        {
            id: "SHP-2026-00847",
            bookingRef: "BK-2024-8756",
            container: "TCLU9087234",
            vessel: "Maersk Elba",
            carrier: "Maersk",
            origin: "Ho Chi Minh City",
            destination: "Los Angeles",
            departure: "2026-02-01",
            carrierETA: "2026-02-18",
            mghPredictedETA: "2026-02-18",
            status: "In Transit",
            exception: null,
            containers: 2,
            po: "PO-2026-44919",
            commodity: "Women's Linen Blazer"
        },
        {
            id: "SHP-2026-00903",
            bookingRef: "BK-2024-8812",
            container: "CMAU4521890",
            vessel: "COSCO Shipping Leo",
            carrier: "COSCO",
            origin: "Dhaka",
            destination: "Hamburg",
            departure: "2026-02-10",
            carrierETA: "2026-03-14",
            mghPredictedETA: "2026-03-16",
            status: "At Origin",
            exception: "WARNING — Pending ISF",
            containers: 1,
            po: "PO-2026-44920",
            commodity: "Kids Fleece Hoodie"
        },
        {
            id: "SHP-2026-00778",
            bookingRef: "BK-2024-8690",
            container: "HLCU2034567",
            vessel: "Hapag-Lloyd Berlin",
            carrier: "Hapag-Lloyd",
            origin: "Mumbai",
            destination: "New York",
            departure: "2026-01-15",
            carrierETA: "2026-02-08",
            mghPredictedETA: "2026-02-08",
            status: "Customs",
            exception: null,
            containers: 1,
            po: "PO-2025-43190",
            commodity: "Cotton Bedding Set"
        },
        {
            id: "SHP-2026-00812",
            bookingRef: "BK-2024-8721",
            container: "EGLV3456789",
            vessel: "Evergreen Ever Ace",
            carrier: "Evergreen",
            origin: "Shanghai",
            destination: "Felixstowe",
            departure: "2026-01-22",
            carrierETA: "2026-02-20",
            mghPredictedETA: "2026-02-24",
            status: "In Transit",
            exception: "DELAYED — Port congestion",
            containers: 4,
            po: "PO-2025-43198",
            commodity: "Seasonal Footwear"
        }
    ];

    const toggleRow = (id: string) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="py-4 px-6 w-12"></th>
                            <th className="py-4 px-2">Shipment ID</th>
                            <th className="py-4 px-2">Origin / Dest</th>
                            <th className="py-4 px-2">Vessel / Carrier</th>
                            <th className="py-4 px-2">Departure</th>
                            <th className="py-4 px-2">ETA (Carrier)</th>
                            <th className="py-4 px-2">ETA (MGH AI)</th>
                            <th className="py-4 px-2">Status</th>
                            <th className="py-4 px-2">Exception</th>
                            <th className="py-4 px-6 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {shipments.map((shipment) => (
                            <React.Fragment key={shipment.id}>
                                <tr
                                    className={clsx(
                                        "hover:bg-slate-50 transition-colors cursor-pointer",
                                        expandedRow === shipment.id ? "bg-slate-50" : ""
                                    )}
                                    onClick={() => toggleRow(shipment.id)}
                                >
                                    <td className="py-4 px-6 text-slate-400">
                                        {expandedRow === shipment.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                    </td>
                                    <td className="py-4 px-2">
                                        <div className="font-medium text-navy-900">{shipment.id}</div>
                                        <div className="text-xs text-slate-500">{shipment.bookingRef}</div>
                                    </td>
                                    <td className="py-4 px-2">
                                        <div className="text-sm font-medium text-slate-700">{shipment.origin}</div>
                                        <div className="text-xs text-slate-400">to {shipment.destination}</div>
                                    </td>
                                    <td className="py-4 px-2">
                                        <div className="text-sm text-slate-700">{shipment.vessel}</div>
                                        <div className="text-xs text-slate-500">{shipment.carrier}</div>
                                    </td>
                                    <td className="py-4 px-2 text-sm text-slate-600 font-mono">{shipment.departure}</td>
                                    <td className="py-4 px-2 text-sm text-slate-600 font-mono">{shipment.carrierETA}</td>
                                    <td className="py-4 px-2 text-sm font-mono font-bold text-teal-600">{shipment.mghPredictedETA}</td>
                                    <td className="py-4 px-2">
                                        <span className={clsx(
                                            "px-2 py-1 rounded-full text-xs font-bold",
                                            shipment.status === "In Transit" ? "bg-blue-100 text-blue-700" :
                                                shipment.status === "Delivered" ? "bg-green-100 text-green-700" :
                                                    shipment.status === "Exception" ? "bg-red-100 text-red-700" :
                                                        "bg-yellow-100 text-yellow-700"
                                        )}>
                                            {shipment.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-2">
                                        {shipment.exception && (
                                            <div className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100 max-w-[140px] truncate">
                                                <AlertTriangle size={12} className="mr-1 shrink-0" />
                                                <span className="truncate">{shipment.exception}</span>
                                            </div>
                                        )}
                                        {!shipment.exception && <span className="text-slate-300 text-xs">—</span>}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="p-1 hover:bg-slate-200 rounded-full text-slate-400">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>

                                {expandedRow === shipment.id && (
                                    <tr className="bg-slate-50/50">
                                        <td colSpan={10} className="px-6 pb-6 pt-2">
                                            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm animate-fade-in flex flex-col lg:flex-row gap-8">
                                                {/* Left: General Info */}
                                                <div className="lg:w-1/4 space-y-4">
                                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cargo Details</h4>
                                                        <div className="space-y-2">
                                                            <div>
                                                                <div className="text-xs text-slate-500">Commodity</div>
                                                                <div className="font-medium text-navy-900">{shipment.commodity}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-xs text-slate-500">Container</div>
                                                                <div className="font-medium text-navy-900 font-mono">{shipment.container}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-xs text-slate-500">Linked PO</div>
                                                                <div className="font-medium text-ocean">{shipment.po}</div>
                                                            </div>
                                                            <div>
                                                                <div className="text-xs text-slate-500">Volume</div>
                                                                <div className="font-medium text-navy-900">{shipment.containers} x 40'HC</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="w-full py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                                                        View Documents (4)
                                                    </button>
                                                </div>

                                                {/* Middle: Timeline */}
                                                <div className="lg:w-1/2">
                                                    <TrackingTimeline />
                                                </div>

                                                {/* Right: AI Panel (Only show if there's an exception or delay) */}
                                                <div className="lg:w-1/4">
                                                    <AIRecommendationPanel />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShipmentTable;
