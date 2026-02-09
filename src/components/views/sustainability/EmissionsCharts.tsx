

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';

const EmissionsCharts = () => {
    const emissionsData = [
        { lane: "SHA→RTD", co2: 1840, shipments: 247 },
        { lane: "HCM→LAX", co2: 1120, shipments: 134 },
        { lane: "DAC→HAM", co2: 890, shipments: 89 },
        { lane: "BOM→NYC", co2: 520, shipments: 42 },
        { lane: "JKT→FXT", co2: 521, shipments: 67 },
    ];

    const modeEmissions = [
        { mode: "Ocean", value: 3200, color: "#1E6091" },
        { mode: "Air", value: 1400, color: "#EF4444" },
        { mode: "Road", value: 291, color: "#F59E0B" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-navy-900 mb-6">Emissions by Trade Lane (tCO2e)</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={emissionsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="lane" type="category" width={80} tick={{ fontSize: 11, fill: '#64748B' }} />
                            <Tooltip
                                cursor={{ fill: '#F1F5F9' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="co2" name="CO2 Emissions" fill="#64748B" radius={[0, 4, 4, 0]} barSize={20}>
                                {emissionsData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#EF4444' : '#64748B'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Donut Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-navy-900 mb-6">Emissions by Transport Mode</h3>
                <div className="flex items-center">
                    <div className="h-64 flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={modeEmissions}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {modeEmissions.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: any) => `${value} tCO2e`} />
                                <Legend verticalAlign="middle" align="right" layout="vertical" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmissionsCharts;
