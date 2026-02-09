import React from 'react';
import POFilters from './purchase-orders/POFilters';
import POTable from './purchase-orders/POTable';

const PurchaseOrders: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-navy-900">Purchase Orders</h1>
                    <p className="text-slate-500">Track production status and manage upstream compliance.</p>
                </div>
                <button className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/20">
                    + Create New PO
                </button>
            </div>

            <POFilters />
            <POTable />
        </div>
    );
};

export default PurchaseOrders;
