import React from 'react';
import ShipmentFilters from './shipments/ShipmentFilters';
import ShipmentTable from './shipments/ShipmentTable';
import { Map } from 'lucide-react';

const ShipmentTracker: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-navy-900">Shipment Tracker</h1>
                    <p className="text-slate-500">Global visibility across all modes and carriers.</p>
                </div>
                <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                    <Map size={16} />
                    View on Map
                </button>
            </div>

            <ShipmentFilters />
            <ShipmentTable />
        </div>
    );
};

export default ShipmentTracker;
