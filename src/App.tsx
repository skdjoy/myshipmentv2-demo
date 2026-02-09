import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Dashboard from './components/views/Dashboard';
import PurchaseOrders from './components/views/PurchaseOrders';
import ShipmentTracker from './components/views/ShipmentTracker';
import BookingEngine from './components/views/BookingEngine';
import Documents from './components/views/Documents';
import Finance from './components/views/Finance';
import Sustainability from './components/views/Sustainability';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'orders': return <PurchaseOrders />;
      case 'shipments': return <ShipmentTracker />;
      case 'booking': return <BookingEngine />;
      case 'documents': return <Documents />;
      case 'finance': return <Finance />;
      case 'sustainability': return <Sustainability />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
