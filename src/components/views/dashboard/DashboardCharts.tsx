

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line
} from 'recharts';

const DashboardCharts = () => {
    const spendData = [
        { month: "Sep", ocean: 2.8, air: 0.42, truck: 0.18 },
        { month: "Oct", ocean: 3.1, air: 0.51, truck: 0.19 },
        { month: "Nov", ocean: 3.4, air: 0.89, truck: 0.21 },
        { month: "Dec", ocean: 2.9, air: 1.20, truck: 0.24 },
        { month: "Jan", ocean: 3.2, air: 0.68, truck: 0.22 },
        { month: "Feb", ocean: 2.1, air: 0.39, truck: 0.16 },
    ];

    const carrierPerformance = [
        { week: "W1", maersk: 96, msc: 91, cosco: 88, hapagLloyd: 94 },
        { week: "W2", maersk: 95, msc: 89, cosco: 90, hapagLloyd: 92 },
        { week: "W3", maersk: 94, msc: 92, cosco: 85, hapagLloyd: 93 },
        { week: "W4", maersk: 97, msc: 90, cosco: 87, hapagLloyd: 95 },
        { week: "W5", maersk: 93, msc: 88, cosco: 91, hapagLloyd: 94 },
        { week: "W6", maersk: 96, msc: 93, cosco: 89, hapagLloyd: 96 },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Freight Spend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 mb-6">Freight Spend (Last 6 Months)</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={spendData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} tickFormatter={(value) => `$${value}M`} />
                            <Tooltip
                                cursor={{ fill: '#F1F5F9' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                            <Bar dataKey="ocean" name="Ocean" stackId="a" fill="#1E6091" radius={[0, 0, 4, 4]} />
                            <Bar dataKey="air" name="Air" stackId="a" fill="#00D4AA" />
                            <Bar dataKey="truck" name="Truck" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Carrier Performance Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 mb-6">On-Time Performance by Carrier</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={carrierPerformance} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                            <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} tickFormatter={(value) => `${value}%`} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                            <Line type="monotone" dataKey="maersk" name="Maersk" stroke="#1E6091" strokeWidth={3} dot={{ r: 4 }} />
                            <Line type="monotone" dataKey="msc" name="MSC" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4 }} />
                            <Line type="monotone" dataKey="cosco" name="COSCO" stroke="#00D4AA" strokeWidth={3} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
