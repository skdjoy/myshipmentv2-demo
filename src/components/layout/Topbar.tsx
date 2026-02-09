import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface TopbarProps {
    toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
                >
                    <Menu size={20} />
                </button>

                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search shipments, POs, bookings..."
                        className="pl-10 pr-4 py-2 w-64 lg:w-96 bg-slate-100 border-none rounded-full text-sm text-slate-700 focus:ring-2 focus:ring-ocean/20 focus:outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-slate-200 mx-1"></div>

                <button className="flex items-center gap-3 hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-200">
                    <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        IA
                    </div>
                    <div className="hidden md:block text-left">
                        <div className="text-sm font-semibold text-slate-800">Inditex Admin</div>
                        <div className="text-xs text-slate-500">Western Region</div>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Topbar;
