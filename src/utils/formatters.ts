import { CurrencyCode } from '../types';
import { CURRENCIES, BASE_PRICE_SAR } from '../data/productData';

export function formatPrice(amountInSAR: number, currencyCode: CurrencyCode): string {
  const currency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = amountInSAR * currency.rateToSAR;

  // Round appropriately depending on currency
  if (currencyCode === 'KWD' || currencyCode === 'BHD' || currencyCode === 'OMR') {
    return `${converted.toFixed(2)} ${currency.symbol}`;
  }
  if (currencyCode === 'USD') {
    return `$${Math.round(converted)}`;
  }
  return `${Math.round(converted)} ${currency.symbol}`;
}

export function getConvertedAmount(amountInSAR: number, currencyCode: CurrencyCode): number {
  const currency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = amountInSAR * currency.rateToSAR;
  if (currencyCode === 'KWD') {
    return Number(converted.toFixed(2));
  }
  return Math.round(converted);
}
