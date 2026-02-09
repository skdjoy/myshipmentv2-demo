import React, { useState } from 'react';
import BookingForm from './booking/BookingForm';
import RouteOptions from './booking/RouteOptions';
import { PackageCheck } from 'lucide-react';

const BookingEngine: React.FC = () => {
    const [showResults, setShowResults] = useState(false);
    const [showSurcharges, setShowSurcharges] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleBook = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="animate-fade-in relative">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">Booking Engine</h1>
                <p className="text-slate-500">Compare rates, routes, and emissions in real-time.</p>
            </div>

            <BookingForm onSearch={handleSearch} />

            {showResults && (
                <RouteOptions
                    showSurcharges={showSurcharges}
                    setShowSurcharges={setShowSurcharges}
                    onBook={handleBook}
                />
            )}

            {/* Success Toast */}
            {showToast && (
                <div className="fixed top-24 right-6 bg-navy-900 text-white px-6 py-4 rounded-lg shadow-xl animate-fade-in z-50 flex items-center gap-4">
                    <div className="bg-green-500 rounded-full p-1">
                        <PackageCheck size={24} />
                    </div>
                    <div>
                        <div className="font-bold">Booking Confirmed!</div>
                        <div className="text-sm text-slate-300">Ref: BK-2024-8830. Sent for buyer approval.</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingEngine;
