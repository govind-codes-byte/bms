import React, { useState } from 'react';
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  TrendingUp,
  CreditCard,
  Landmark,
  Cog,
  Award,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Banknote,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: ArrowLeftRight, label: 'Transactions' },
  { icon: Wallet, label: 'Accounts' },
  { icon: TrendingUp, label: 'Investments' },
  { icon: CreditCard, label: 'Credit Cards' },
  { icon: Landmark, label: 'Loans' },
  { icon: Cog, label: 'Services' },
  { icon: Award, label: 'My Privileges' },
  { icon: Settings, label: 'Setting' },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`bg-sidebar text-white transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'} hidden lg:flex flex-col`}>
      <div className="flex items-center justify-between p-4 h-[88px] border-b border-gray-700">
        {!isCollapsed && <h1 className="text-2xl font-bold flex items-center gap-2"><Banknote /> BankDash</h1>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-full hover:bg-gray-700">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <nav className="flex-grow p-4">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className={`flex items-center gap-4 p-3 rounded-lg hover:bg-primary ${item.label === 'Dashboard' ? 'bg-primary' : ''}`}>
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-red-500">
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
