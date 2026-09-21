export type CurrencyCode = 'SAR' | 'AED' | 'EGP' | 'KWD' | 'QAR' | 'BHD' | 'OMR' | 'USD';

export interface Currency {
  code: CurrencyCode;
  name: string;
  symbol: string;
  rateToSAR: number; // base is SAR
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerEmail: string;
  phone?: string;
  currency: CurrencyCode;
  amount: number;
  date: string;
  paymentMethod: 'card' | 'apple_pay' | 'local_pay';
  downloadToken: string;
}

export type AppView = 'landing' | 'checkout' | 'processing' | 'failed' | 'success';
