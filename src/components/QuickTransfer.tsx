import React from 'react';
import { Send } from 'lucide-react';
import { generateMockUsers } from '../lib/mockData';
import { User } from '../types';

const users: User[] = generateMockUsers(5);

const QuickTransfer: React.FC = () => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-md">
      <h4 className="text-xl font-bold text-text-primary">Quick Transfer</h4>
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {users.map(user => (
            <img key={user.id} src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white" />
          ))}
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white font-bold text-text-secondary">
            +
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary font-bold">$</span>
            <input type="text" placeholder="Amount" className="bg-gray-100 rounded-full py-3 pl-8 pr-4 w-32 text-right font-bold focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button className="bg-primary text-white p-3 rounded-full hover:bg-primary-hover transition-colors">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
