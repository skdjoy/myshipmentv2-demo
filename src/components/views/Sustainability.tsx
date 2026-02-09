import React from 'react';
import SustainabilityKPIs from './sustainability/SustainabilityKPIs';
import EmissionsCharts from './sustainability/EmissionsCharts';
import OffsetCTA from './sustainability/OffsetCTA';

const Sustainability: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">Sustainability</h1>
                <p className="text-slate-500">Monitor carbon footprint and manage CSRD reporting compliance.</p>
            </div>

            <SustainabilityKPIs />
            <EmissionsCharts />
            <OffsetCTA />
        </div>
    );
};

export default Sustainability;
