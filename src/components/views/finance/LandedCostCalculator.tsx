

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const LandedCostCalculator = () => {
    const costData = [
        { name: 'Product Cost', value: 308000, color: '#1E6091' }, // Navy
        { name: 'Duty', value: 36960, color: '#F59E0B' }, // Orange
        { name: 'Freight', value: 8400, color: '#00D4AA' }, // Teal
        { name: 'Handling & Drayage', value: 4560, color: '#64748B' }, // Slate
        { name: 'Insurance', value: 640, color: '#94A3B8' }, // Light Slate
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-navy-900 mb-2">Landed Cost Analysis</h3>
            <p className="text-sm text-slate-500 mb-6">SKU: WLB-SS26-0042 — Women's Linen Blazer (8,000 units)</p>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Chart */}
                <div className="w-full lg:w-1/2 flex items-center">
                    <div className="w-48 h-48 flex-shrink-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={costData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {costData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex-1 pl-4">
                        <ul className="space-y-3">
                            {costData.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span
                                        className="w-3 h-3 rounded-full mt-1 mr-2 flex-shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    <div>
                                        <div className="text-xs font-medium text-slate-500">{item.name}</div>
                                        <div className="text-sm font-bold text-navy-900">${item.value.toLocaleString()}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Breakdown Table */}
                <div className="w-full lg:w-1/2">
                    <table className="w-full text-sm">
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="py-2 text-slate-600">FOB Product Cost</td>
                                <td className="py-2 text-right font-medium text-navy-900">$38.50</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-slate-600">Freight & Handling</td>
                                <td className="py-2 text-right font-medium text-navy-900">$1.62</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-slate-600">Customs Duty (12%)</td>
                                <td className="py-2 text-right font-medium text-navy-900">$4.62</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-slate-600">Insurance</td>
                                <td className="py-2 text-right font-medium text-navy-900">$0.08</td>
                            </tr>
                            <tr className="border-t border-slate-300">
                                <td className="py-3 font-bold text-navy-900">Total Landed Cost</td>
                                <td className="py-3 text-right font-bold text-ocean text-lg">$44.82</td>
                            </tr>
                            <tr>
                                <td className="py-2 text-slate-500">Retail Price</td>
                                <td className="py-2 text-right text-slate-500">$129.00</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold text-green-700">Gross Margin</td>
                                <td className="py-2 text-right font-bold text-green-700">65.3%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LandedCostCalculator;
