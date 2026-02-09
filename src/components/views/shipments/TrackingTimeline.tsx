

import { Circle, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

const TrackingTimeline = () => {
    const events = [
        { status: 'complete', title: 'Booking Confirmed', date: 'Jan 20', location: 'Shanghai' },
        { status: 'complete', title: 'Cargo Received at Origin Warehouse', date: 'Jan 25', location: 'Shanghai' },
        { status: 'complete', title: 'Customs Cleared (Origin)', date: 'Jan 27', location: 'Shanghai' },
        { status: 'complete', title: 'Vessel Departed', date: 'Jan 28', location: 'Shanghai Port' },
        { status: 'current', title: 'In Transit (Day 12 of 28)', date: 'Feb 09', location: 'Indian Ocean' },
        { status: 'pending', title: 'Arrive Destination Port', date: 'Feb 25', location: 'Rotterdam', alert: true },
        { status: 'future', title: 'Customs Clearance (Destination)', date: null, location: 'Rotterdam' },
        { status: 'future', title: 'Final Delivery to DC', date: null, location: 'Tilburg DC' },
    ];

    return (
        <div className="py-2">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Tracking Timeline</h4>
            <div className="space-y-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-200"></div>

                {events.map((event, index) => (
                    <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                        <div className={clsx(
                            "relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 bg-white",
                            event.status === 'complete' ? "border-green-500 text-green-500" :
                                event.status === 'current' ? "border-ocean text-ocean ring-4 ring-ocean/20" :
                                    event.alert ? "border-red-500 text-red-500" :
                                        "border-slate-200 text-slate-300"
                        )}>
                            {event.status === 'complete' && <CheckCircle size={16} />}
                            {event.status === 'current' && <Clock size={16} />}
                            {event.alert && <AlertTriangle size={16} />}
                            {event.status === 'future' && <Circle size={10} fill="currentColor" className="text-slate-200" />}
                        </div>

                        <div className="pt-0.5">
                            <div className="flex items-center gap-2">
                                <span className={clsx(
                                    "font-medium text-sm",
                                    event.status === 'complete' ? "text-slate-700" :
                                        event.status === 'current' ? "text-navy-900 font-bold" :
                                            event.alert ? "text-red-700 font-bold" :
                                                "text-slate-400"
                                )}>
                                    {event.title}
                                </span>
                                {event.alert && (
                                    <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-red-200">
                                        DELAY LIKELY
                                    </span>
                                )}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 flex gap-2">
                                {event.date && <span>{event.date}</span>}
                                {event.date && event.location && <span>·</span>}
                                {event.location && <span>{event.location}</span>}
                            </div>

                            {event.alert && (
                                <div className="mt-2 bg-teal-50 border border-teal-200 rounded-lg p-3 text-sm text-teal-900">
                                    <div className="font-bold mb-1 flex items-center gap-2">
                                        <span className="bg-teal-600 text-white text-[10px] px-1.5 py-0.5 rounded">MGH AI PREDICTION</span>
                                        <span>Expected: Mar 02</span>
                                    </div>
                                    <p className="text-xs leading-relaxed text-teal-800">
                                        MGH AI predicts arrival 5 days later than carrier ETA.
                                        Reason: Suez Canal queue currently 48 vessels deep. Historical average queue clearance: 3.2 days.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackingTimeline;
