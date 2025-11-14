import React, { useState } from 'react';
import { Eye, EyeOff, PlusCircle } from 'lucide-react';

const BalanceCard: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const balance = 12560.50;

  return (
    <div className="bg-card p-6 rounded-2xl shadow-md flex justify-between items-center">
      <div>
        <p className="text-text-secondary">Total Balance</p>
        <div className="flex items-center gap-4 mt-2">
          <h3 className="text-4xl font-bold text-text-primary">
            {isBalanceVisible ? `$${balance.toLocaleString('en-US')}` : '••••••••'}
          </h3>
          <button onClick={() => setIsBalanceVisible(!isBalanceVisible)} className="text-text-secondary hover:text-text-primary">
            {isBalanceVisible ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>
        </div>
      </div>
      <button className="bg-primary text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-primary-hover transition-colors">
        <PlusCircle size={20} />
        <span>Top Up</span>
      </button>
    </div>
  );
};

export default BalanceCard;
