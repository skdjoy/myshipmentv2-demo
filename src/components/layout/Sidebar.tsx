import React from 'react';
import {
    LayoutDashboard,
    ShoppingCart,
    Ship,
    CalendarCheck,
    FileText,
    DollarSign,
    Leaf,
    Settings,
    ChevronLeft,
    ChevronRight,
    MessageSquare
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
    activeView: string;
    setActiveView: (view: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isOpen, setIsOpen }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'orders', label: 'Purchase Orders', icon: ShoppingCart },
        { id: 'shipments', label: 'Shipment Tracker', icon: Ship },
        { id: 'booking', label: 'Booking Engine', icon: CalendarCheck },
        { id: 'documents', label: 'Documents', icon: FileText },
        { id: 'finance', label: 'Finance', icon: DollarSign },
        { id: 'sustainability', label: 'Sustainability', icon: Leaf },
        { id: 'mgh-ask', label: 'MGH Ask', icon: MessageSquare },
        { id: 'settings', label: 'Settings', icon: Settings, disabled: true },
    ];

    return (
        <aside
            className={clsx(
                "bg-navy-900 text-white flex flex-col transition-all duration-300 h-screen sticky top-0 left-0 z-20",
                isOpen ? "w-64" : "w-20"
            )}
        >
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-navy-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-ocean rounded-lg flex items-center justify-center shrink-0">
                        <Ship className="w-5 h-5 text-white" />
                    </div>
                    {isOpen && (
                        <div className="font-bold text-lg tracking-tight whitespace-nowrap overflow-hidden">
                            myshipment
                            <span className="text-xs font-normal text-slate-400 block -mt-1">Control Tower™</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => !item.disabled && setActiveView(item.id)}
                        disabled={item.disabled}
                        className={clsx(
                            "w-full flex items-center px-3 py-3 rounded-lg transition-colors group relative",
                            activeView === item.id
                                ? "bg-ocean text-white shadow-lg shadow-ocean/30"
                                : "text-slate-400 hover:bg-navy-800 hover:text-white",
                            item.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
                        )}
                    >
                        <item.icon className={clsx("w-5 h-5 shrink-0", isOpen ? "mr-3" : "mx-auto")} />

                        {isOpen && (
                            <span className="font-medium whitespace-nowrap overflow-hidden">{item.label}</span>
                        )}

                        {!isOpen && (
                            <div className="absolute left-full ml-4 px-2 py-1 bg-navy-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                {item.label}
                            </div>
                        )}
                    </button>
                ))}
            </nav>

            {/* Collapse Toggle */}
            <div className="p-4 border-t border-navy-800">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-center p-2 rounded-lg bg-navy-800 hover:bg-ocean text-slate-400 hover:text-white transition-colors"
                >
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
