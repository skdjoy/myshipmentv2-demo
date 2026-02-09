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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <InvoiceTable />
                </div>
                <div>
                    <LandedCostCalculator />
                </div>
            </div>
        </div>
    );
};

export default Finance;
