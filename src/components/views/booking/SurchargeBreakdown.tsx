


const SurchargeBreakdown = () => {
    return (
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200 max-w-md ml-auto">
            <h4 className="text-sm font-bold text-navy-900 mb-4">Real-Time Surcharge Breakdown</h4>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                    <span>Base Ocean Freight</span>
                    <span>$2,200</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Bunker Adjustment (BAF)</span>
                    <span>$480</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Peak Season Surcharge (PSS)</span>
                    <span>$350</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Currency Adjustment (CAF)</span>
                    <span>$120</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Terminal Handling (THC)</span>
                    <span>$290</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span>Documentation Fee</span>
                    <span>$45</span>
                </div>
                <div className="border-t border-slate-200 my-2 pt-2 flex justify-between font-bold text-navy-900 text-base">
                    <span>Total per 40'HC</span>
                    <span>$3,485</span>
                </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">
                * Rates are valid for 24 hours. Subject to space availability.
            </p>
        </div>
    );
};

export default SurchargeBreakdown;
