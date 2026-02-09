import React from 'react';
import FinanceKPIs from './finance/FinanceKPIs';
import InvoiceTable from './finance/InvoiceTable';
import LandedCostCalculator from './finance/LandedCostCalculator';

const Finance: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">Finance & Costing</h1>
                <p className="text-slate-500">Freight audit, invoice reconciliation, and landed cost analysis.</p>
            </div>

            <FinanceKPIs />

            <div className="flex flex-col gap-8">
                <InvoiceTable />
                <LandedCostCalculator />
            </div>
        </div>
    );
};

export default Finance;
