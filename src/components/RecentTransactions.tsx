import React from 'react';
import { Music, Film, User as UserIcon, ArrowUpRight } from 'lucide-react';
import { generateMockTransactions } from '../lib/mockData';
import { Transaction } from '../types';

const transactions: Transaction[] = generateMockTransactions(5);

const iconMap: { [key in Transaction['icon']]: React.ReactNode } = {
  spotify: <Music className="text-green-500" />,
  netflix: <Film className="text-red-600" />,
  user: <UserIcon className="text-blue-500" />,
  default: <ArrowUpRight className="text-gray-500" />,
};

const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-bold text-text-primary">Recent Transaction</h4>
        <a href="#" className="text-primary font-semibold hover:underline">View All</a>
      </div>
      <ul className="mt-4 space-y-4">
        {transactions.map(tx => (
          <li key={tx.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                {iconMap[tx.icon]}
              </div>
              <div>
                <p className="font-semibold text-text-primary">{tx.name}</p>
                <p className="text-sm text-text-secondary">{tx.date}</p>
              </div>
            </div>
            <p className="font-bold text-red-500">{tx.amount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
