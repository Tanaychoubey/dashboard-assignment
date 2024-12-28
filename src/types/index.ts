export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'approved' | 'pending' | 'declined';
}

export interface Feedback {
  id: string;
  customer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ActivityData {
  name: string;
  value: number;
}