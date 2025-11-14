export interface Transaction {
  id: string;
  icon: 'spotify' | 'netflix' | 'user' | 'default';
  name: string;
  date: string;
  amount: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}
