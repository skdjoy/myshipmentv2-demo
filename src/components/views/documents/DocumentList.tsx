import { useState } from 'react';
import { FileText, Download, ExternalLink, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';
import clsx from 'clsx';

const DocumentList = () => {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Bills of Lading", "Commercial Invoices", "Packing Lists", "Certificates", "Customs Filings"];

    const documents = [
        { name: "Bill of Lading — MSCU7294561", type: "Bills of Lading", shipment: "SHP-2026-00891", date: "2026-01-28", status: "Final", aiExtracted: true },
        { name: "Commercial Invoice — PO-2026-44919", type: "Commercial Invoices", shipment: "SHP-2026-00847", date: "2026-02-01", status: "Draft", aiExtracted: false },
        { name: "Packing List — BK-2024-8756", type: "Packing Lists", shipment: "SHP-2026-00847", date: "2026-02-01", status: "Final", aiExtracted: true },
        { name: "Certificate of Origin — PO-2026-44918", type: "Certificates", shipment: null, date: "2026-02-05", status: "Pending Upload", aiExtracted: false },
        { name: "ISF Filing — BK-2024-8812", type: "Customs Filings", shipment: "SHP-2026-00903", date: null, status: "Overdue", aiExtracted: false },
        { name: "Phytosanitary Certificate — MSCU7294561", type: "Certificates", shipment: "SHP-2026-00891", date: null, status: "Missing", aiExtracted: false },
    ];

    const filteredDocs = activeTab === "All" ? documents : documents.filter(doc => doc.type === activeTab);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Final': return <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><CheckCircle size={12} /> Final</span>;
            case 'Draft': return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><Clock size={12} /> Draft</span>;
            case 'Pending Upload': return <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-bold">Pending Supplier</span>;
            case 'Overdue': return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> OVERDUE</span>;
            case 'Missing': return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><AlertCircle size={12} /> MISSING</span>;
            default: return null;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-slate-200 overflow-x-auto">
                <div className="flex px-4 min-w-max">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={clsx(
                                "px-4 py-4 text-sm font-medium border-b-2 transition-colors",
                                activeTab === tab ? "border-ocean text-ocean" : "border-transparent text-slate-500 hover:text-slate-800"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <table className="w-full">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <th className="py-4 px-6">Document Name</th>
                        <th className="py-4 px-4">Type</th>
                        <th className="py-4 px-4">Related To</th>
                        <th className="py-4 px-4 text-right">Date</th>
                        <th className="py-4 px-4 text-center">Status</th>
                        <th className="py-4 px-4 text-center">AI Data</th>
                        <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filteredDocs.map((doc, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors group">
                            <td className="py-4 px-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-white group-hover:text-ocean group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200">
                                        <FileText size={18} />
                                    </div>
                                    <div className="font-medium text-navy-900">{doc.name}</div>
                                </div>
                            </td>
                            <td className="py-4 px-4 text-sm text-slate-500">{doc.type}</td>
                            <td className="py-4 px-4">
                                {doc.shipment ? (
                                    <span className="text-ocean text-sm hover:underline cursor-pointer">{doc.shipment}</span>
                                ) : <span className="text-slate-400 text-sm">—</span>}
                            </td>
                            <td className="py-4 px-4 text-right text-sm text-slate-600 font-mono">{doc.date || '—'}</td>
                            <td className="py-4 px-4 flex justify-center">{getStatusBadge(doc.status)}</td>
                            <td className="py-4 px-4 text-center">
                                {doc.aiExtracted && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-100" title="Data extracted by AI">
                                        <Zap size={10} fill="currentColor" /> AI Ready
                                    </span>
                                )}
                            </td>
                            <td className="py-4 px-6 text-right">
                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 text-slate-400 hover:text-navy-900 hover:bg-slate-200 rounded-lg" title="View"><ExternalLink size={16} /></button>
                                    <button className="p-1.5 text-slate-400 hover:text-ocean hover:bg-slate-200 rounded-lg" title="Download"><Download size={16} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DocumentList;
