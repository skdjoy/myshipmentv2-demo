import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreHorizontal, Truck, Box, Calendar } from 'lucide-react';
import clsx from 'clsx';
import VisualMilestoneTracker from './VisualMilestoneTracker';

const POTable = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const purchaseOrders = [
        {
            poNumber: "PO-2026-44918",
            supplier: "Jiangsu Garments Co.",
            origin: "Shanghai, CN",
            items: "Men's Cotton Crew Tee (4 colors)",
            totalUnits: 25000,
            exFactory: "2026-02-20",
            status: "In Production",
            progress: 65,
            milestones: {
                poReceived: "2026-01-05",
                fabricSourced: "2026-01-12",
                cuttingStarted: "2026-01-20",
                sewingStarted: "2026-02-01",
                qcPassed: null,
                packed: null,
                shipped: null
            },
            season: "SS26",
            value: 187500
        },
        {
            poNumber: "PO-2026-44919",
            supplier: "Pham Textiles Ltd.",
            origin: "Ho Chi Minh City, VN",
            items: "Women's Linen Blazer",
            totalUnits: 8000,
            exFactory: "2026-02-15",
            status: "QC Passed",
            progress: 85,
            milestones: {
                poReceived: "2025-12-20",
                fabricSourced: "2025-12-28",
                cuttingStarted: "2026-01-05",
                sewingStarted: "2026-01-15",
                qcPassed: "2026-02-05",
                packed: null,
                shipped: null
            },
            season: "SS26",
            value: 320000
        },
        {
            poNumber: "PO-2026-44920",
            supplier: "BDG Knitwear",
            origin: "Dhaka, BD",
            items: "Kids Fleece Hoodie (6 sizes)",
            totalUnits: 40000,
            exFactory: "2026-03-01",
            status: "Fabric Sourced",
            progress: 30,
            milestones: {
                poReceived: "2026-01-10",
                fabricSourced: "2026-01-28",
                cuttingStarted: null,
                sewingStarted: null,
                qcPassed: null,
                packed: null,
                shipped: null
            },
            season: "SS26",
            value: 480000
        },
        {
            poNumber: "PO-2026-44921",
            supplier: "Pham Textiles Ltd.",
            origin: "Ho Chi Minh City, VN",
            items: "Women's Silk Scarf Collection",
            totalUnits: 15000,
            exFactory: "2026-02-22",
            status: "Cutting Started",
            progress: 45,
            milestones: {
                poReceived: "2026-01-02",
                fabricSourced: "2026-01-15",
                cuttingStarted: "2026-02-01",
                sewingStarted: null,
                qcPassed: null,
                packed: null,
                shipped: null
            },
            season: "SS26",
            value: 225000
        },
        {
            poNumber: "PO-2025-43205",
            supplier: "Jiangsu Garments Co.",
            origin: "Shanghai, CN",
            items: "Men's Down Jacket",
            totalUnits: 12000,
            exFactory: "2025-12-01",
            status: "In Transit",
            progress: 95,
            milestones: {
                poReceived: "2025-09-15",
                fabricSourced: "2025-09-25",
                cuttingStarted: "2025-10-05",
                sewingStarted: "2025-10-20",
                qcPassed: "2025-11-15",
                packed: "2025-11-20",
                shipped: "2025-12-03"
            },
            season: "AW25",
            value: 540000
        },
    ];

    const toggleRow = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const getStatusColor = (status: string) => {
        if (status === 'Delivered' || status === 'QC Passed') return 'bg-green-100 text-green-700';
        if (status === 'In Transit') return 'bg-blue-100 text-blue-700';
        if (status === 'In Production' || status === 'Cutting Started') return 'bg-yellow-100 text-yellow-700';
        return 'bg-slate-100 text-slate-700';
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            <th className="py-4 px-6 w-12"></th>
                            <th className="py-4 px-2">PO Number</th>
                            <th className="py-4 px-2">Supplier</th>
                            <th className="py-4 px-2">Origin</th>
                            <th className="py-4 px-2">Items</th>
                            <th className="py-4 px-2 text-right">Total Units</th>
                            <th className="py-4 px-2 text-right">Value</th>
                            <th className="py-4 px-2">Ex-Factory</th>
                            <th className="py-4 px-2 text-center">Status</th>
                            <th className="py-4 px-6 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {purchaseOrders.map((po, index) => (
                            <React.Fragment key={index}>
                                <tr
                                    className={clsx(
                                        "hover:bg-slate-50 transition-colors cursor-pointer",
                                        expandedRow === index ? "bg-slate-50" : ""
                                    )}
                                    onClick={() => toggleRow(index)}
                                >
                                    <td className="py-4 px-6 text-slate-400">
                                        {expandedRow === index ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                    </td>
                                    <td className="py-4 px-2 font-medium text-navy-900">{po.poNumber}</td>
                                    <td className="py-4 px-2 text-slate-600">{po.supplier}</td>
                                    <td className="py-4 px-2 text-slate-500 text-sm">{po.origin}</td>
                                    <td className="py-4 px-2 text-slate-700 font-medium">{po.items}</td>
                                    <td className="py-4 px-2 text-right font-mono text-slate-600">{po.totalUnits.toLocaleString()}</td>
                                    <td className="py-4 px-2 text-right font-mono text-slate-600">${(po.value / 1000).toFixed(1)}k</td>
                                    <td className="py-4 px-2 text-slate-500 font-mono text-sm">{po.exFactory}</td>
                                    <td className="py-4 px-2 text-center">
                                        <span className={clsx("px-2 py-1 rounded-full text-xs font-bold", getStatusColor(po.status))}>
                                            {po.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="p-1 hover:bg-slate-200 rounded-full text-slate-400">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>

                                {/* Expanded Detail View */}
                                {expandedRow === index && (
                                    <tr className="bg-slate-50/50">
                                        <td colSpan={10} className="px-6 pb-6 pt-2">
                                            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm animate-fade-in">
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Production Milestones</h4>
                                                    <VisualMilestoneTracker milestones={po.milestones} />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                                                    <div className="flex items-start gap-3">
                                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                                            <Truck size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-bold text-slate-400 uppercase">Logistics Plan</div>
                                                            <div className="text-sm font-medium text-navy-900 mt-1">Split Shipment</div>
                                                            <div className="text-xs text-slate-500 mt-1">
                                                                15k units on BK-8801 (Feb 20)<br />
                                                                10k units on BK-8805 (Feb 25)
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                                            <Box size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-bold text-slate-400 uppercase">Vendor Scorecard</div>
                                                            <div className="flex flex-wrap gap-2 mt-1">
                                                                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded border border-green-200">Accuracy: 96%</span>
                                                                <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded border border-yellow-200">Timeliness: 88%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                                            <Calendar size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-bold text-slate-400 uppercase">CRD Status</div>
                                                            <div className="text-sm font-medium text-navy-900 mt-1">On Track</div>
                                                            <div className="text-xs text-slate-500 mt-1">No deviations reported in last 7 days.</div>
                                                        </div>
                                                    </div>
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

export default POTable;
