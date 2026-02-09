

import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import clsx from 'clsx';

const InvoiceTable = () => {
    const invoices = [
        { id: "INV-2026-0891", amount: 127400, status: "Auto-Approved", matchRate: 100, dueDate: "2026-02-28", carrier: "MSC" },
        { id: "INV-2026-0847", amount: 84200, status: "Auto-Approved", matchRate: 100, dueDate: "2026-03-05", carrier: "Maersk" },
        { id: "INV-2026-0812", amount: 212800, status: "Discrepancy", matchRate: 94, dueDate: "2026-02-20", carrier: "Evergreen", note: "Unquoted charge: $1,200" },
        { id: "INV-2026-0778", amount: 45600, status: "Pending", matchRate: 0, dueDate: "2026-03-10", carrier: "Hapag-Lloyd" },
        { id: "INV-2026-0903", amount: 38900, status: "Auto-Approved", matchRate: 100, dueDate: "2026-03-15", carrier: "COSCO" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-navy-900">Recent Invoices</h3>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <th className="py-4 px-6">Invoice #</th>
                        <th className="py-4 px-4">Carrier</th>
                        <th className="py-4 px-4 text-right">Amount</th>
                        <th className="py-4 px-4 text-center">Match Rate</th>
                        <th className="py-4 px-4 text-center">Status</th>
                        <th className="py-4 px-4 text-right">Due Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {invoices.map((inv, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6 font-medium text-navy-900">{inv.id}</td>
                            <td className="py-4 px-4 text-sm text-slate-600">{inv.carrier}</td>
                            <td className="py-4 px-4 text-right font-mono text-slate-700">${inv.amount.toLocaleString()}</td>
                            <td className="py-4 px-4 text-center">
                                {inv.matchRate > 0 ? (
                                    <span className={clsx(
                                        "text-xs font-bold px-2 py-1 rounded",
                                        inv.matchRate === 100 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                    )}>
                                        {inv.matchRate}%
                                    </span>
                                ) : <span className="text-slate-400 text-xs">—</span>}
                            </td>
                            <td className="py-4 px-4 flex justify-center">
                                {inv.status === 'Auto-Approved' && (
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                                        <CheckCircle size={14} /> Approved
                                    </span>
                                )}
                                {inv.status === 'Discrepancy' && (
                                    <div className="flex items-center gap-1 text-xs font-bold text-red-600 relative group cursor-help">
                                        <AlertTriangle size={14} /> Discrepancy
                                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-navy-900 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            {inv.note}
                                        </span>
                                    </div>
                                )}
                                {inv.status === 'Pending' && (
                                    <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                                        <Clock size={14} /> Pending
                                    </span>
                                )}
                            </td>
                            <td className="py-4 px-4 text-right text-sm text-slate-500 font-mono">{inv.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTable;
