import React from 'react';
import KPICards from './dashboard/KPICards';
import TradeLaneTable from './dashboard/TradeLaneTable';
import ExceptionsTicker from './dashboard/ExceptionsTicker';
import DashboardCharts from './dashboard/DashboardCharts';

const Dashboard: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">Control Tower™</h1>
                <p className="text-slate-500">Welcome back, Inditex Admin. Here is your supply chain at a glance.</p>
            </div>

            <KPICards />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                <div className="lg:col-span-3">
                    <TradeLaneTable />
                </div>
                <div className="lg:col-span-2">
                    <ExceptionsTicker />
                </div>
            </div>

            <DashboardCharts />
        </div>
    );
};

export default Dashboard;
