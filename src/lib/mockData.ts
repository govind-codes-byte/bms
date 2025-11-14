import { faker } from '@faker-js/faker';
import { Transaction, User } from '../types';

const transactionIcons: Transaction['icon'][] = ['spotify', 'netflix', 'user', 'default'];

export const generateMockTransactions = (count: number): Transaction[] => {
  const transactions: Transaction[] = [];
  for (let i = 0; i < count; i++) {
    transactions.push({
      id: faker.string.uuid(),
      icon: faker.helpers.arrayElement(transactionIcons),
      name: faker.company.name(),
      date: faker.date.recent().toLocaleDateString(),
      amount: parseFloat(faker.finance.amount(-500, -5, 2)),
    });
  }
  // Manually set some known ones for better visuals
  transactions[0].name = 'Spotify Subscription';
  transactions[0].icon = 'spotify';
  transactions[1].name = 'Netflix Subscription';
  transactions[1].icon = 'netflix';
  transactions[2].name = `Transfer to ${faker.person.firstName()}`;
  transactions[2].icon = 'user';
  return transactions;
};

export const generateMockUsers = (count: number): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      avatar: faker.image.avatar(),
    });
  }
  return users;
};
