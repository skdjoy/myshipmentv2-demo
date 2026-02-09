


const TradeLaneTable = () => {
    const lanes = [
        { lane: "Shanghai → Rotterdam", shipments: 247, onTime: "96%", transit: "28 days", status: "good" },
        { lane: "HCMC → Los Angeles", shipments: 134, onTime: "91%", transit: "22 days", status: "warning" },
        { lane: "Dhaka → Hamburg", shipments: 89, onTime: "88%", transit: "32 days", status: "warning" },
        { lane: "Mumbai → New York", shipments: 42, onTime: "97%", transit: "26 days", status: "good" },
        { lane: "Jakarta → Felixstowe", shipments: 67, onTime: "79%", transit: "35 days", status: "critical" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Global Trade Lane Performance</h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                            <th className="pb-3">Trade Lane</th>
                            <th className="pb-3 text-right">Active Shipment</th>
                            <th className="pb-3 text-right">On-Time %</th>
                            <th className="pb-3 text-right">Avg Transit</th>
                            <th className="pb-3 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {lanes.map((lane, index) => (
                            <tr key={index} className="group hover:bg-slate-50 transition-colors">
                                <td className="py-4 font-medium text-navy-900">{lane.lane}</td>
                                <td className="py-4 text-right text-slate-600 font-mono">{lane.shipments}</td>
                                <td className="py-4 text-right text-slate-600 font-mono">{lane.onTime}</td>
                                <td className="py-4 text-right text-slate-600">{lane.transit}</td>
                                <td className="py-4 flex justify-center">
                                    <span className="relative flex h-3 w-3">
                                        {lane.status === 'good' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                                        {lane.status === 'warning' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>}
                                        {lane.status === 'critical' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}

                                        <span className={`relative inline-flex rounded-full h-3 w-3 ${lane.status === 'good' ? 'bg-green-500' :
                                            lane.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}></span>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TradeLaneTable;
