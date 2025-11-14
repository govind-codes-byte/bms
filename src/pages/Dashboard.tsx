import React from 'react';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import QuickTransfer from '../components/QuickTransfer';
import RecentTransactions from '../components/RecentTransactions';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BalanceCard />
          <QuickTransfer />
        </div>
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
