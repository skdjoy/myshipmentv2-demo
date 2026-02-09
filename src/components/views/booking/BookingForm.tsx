import React from 'react';
import { Search, Calendar, Package, MapPin } from 'lucide-react';

interface BookingFormProps {
    onSearch: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSearch }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Origin */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Origin</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-navy-900 font-medium focus:ring-2 focus:ring-ocean/20 focus:border-ocean focus:outline-none appearance-none">
                            <option>Shanghai, CN</option>
                            <option>Ho Chi Minh City, VN</option>
                            <option>Dhaka, BD</option>
                            <option>Mumbai, IN</option>
                        </select>
                    </div>
                </div>

                {/* Destination */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Destination</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-navy-900 font-medium focus:ring-2 focus:ring-ocean/20 focus:border-ocean focus:outline-none appearance-none">
                            <option>Rotterdam, NL</option>
                            <option>Hamburg, DE</option>
                            <option>Los Angeles, US</option>
                            <option>New York, US</option>
                        </select>
                    </div>
                </div>

                {/* Cargo Type */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Cargo</label>
                    <div className="relative">
                        <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <select className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-navy-900 font-medium focus:ring-2 focus:ring-ocean/20 focus:border-ocean focus:outline-none appearance-none">
                            <option>FCL 40' High Cube</option>
                            <option>FCL 20' Standard</option>
                            <option>FCL 40' Standard</option>
                            <option>LCL (Less than Container)</option>
                        </select>
                    </div>
                </div>

                {/* Ready Date */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Ready Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="date"
                            defaultValue="2026-02-15"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-navy-900 font-medium focus:ring-2 focus:ring-ocean/20 focus:border-ocean focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6 pt-6 border-t border-slate-100">
                <button
                    onClick={onSearch}
                    className="bg-ocean text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-ocean/30 hover:bg-ocean/90 transition-all flex items-center gap-2"
                >
                    <Search size={18} />
                    Search Routes
                </button>
            </div>
        </div>
    );
};

export default BookingForm;
