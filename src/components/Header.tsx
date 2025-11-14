import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-background p-6 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-text-primary">Hello, J-Doe</h2>
        <p className="text-text-secondary">Welcome back and explore the dashboard!</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search..." className="bg-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <button className="relative p-2 bg-white rounded-full hover:bg-gray-200">
          <Bell size={20} className="text-text-primary" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <img src="https://i.pravatar.cc/40?u=j-doe" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
