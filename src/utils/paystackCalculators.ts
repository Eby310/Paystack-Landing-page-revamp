/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeeBreakdown {
  amount: number;
  fee: number;
  netPayout: number;
  percentageFee: number;
  flatFee: number;
  isCapped: boolean;
}

/**
 * Calculates Paystack fees for Nigerian transactions.
 * Rules:
 * - Local transactions: 1.5% + NGN 100
 * - Flat NGN 100 fee is WAIVED for transactions under NGN 2,500
 * - Total fee is capped at NGN 2,000 max
 * - International transactions: 3.9% + NGN 100 (not capped)
 */
export function calculatePaystackFee(amount: number, isInternational: boolean = false): FeeBreakdown {
  if (amount <= 0 || isNaN(amount)) {
    return {
      amount: 0,
      fee: 0,
      netPayout: 0,
      percentageFee: 0,
      flatFee: 0,
      isCapped: false,
    };
  }

  if (isInternational) {
    const percentage = 0.039;
    const flat = 100;
    const percentageFee = Math.round(amount * percentage * 100) / 100;
    const totalFee = Math.round((percentageFee + flat) * 100) / 100;
    return {
      amount,
      fee: totalFee,
      netPayout: Math.max(0, Math.round((amount - totalFee) * 100) / 100),
      percentageFee,
      flatFee: flat,
      isCapped: false,
    };
  }

  // Local Nigerian transactions
  const percentage = 0.015;
  const flat = amount < 2500 ? 0 : 100;
  const percentageFee = Math.round(amount * percentage * 100) / 100;
  let totalFee = percentageFee + flat;

  const isCapped = totalFee > 2000;
  if (isCapped) {
    totalFee = 2000;
  }

  totalFee = Math.round(totalFee * 100) / 100;

  return {
    amount,
    fee: totalFee,
    netPayout: Math.max(0, Math.round((amount - totalFee) * 100) / 100),
    percentageFee,
    flatFee: flat,
    isCapped,
  };
}

/**
 * Formats monetary amounts with appropriate currency symbol.
 */
export function formatCurrency(amount: number, currency: string = 'NGN'): string {
  const rounded = Math.round(amount);
  const formattedNumber = rounded.toLocaleString('en-US');

  switch (currency.toUpperCase()) {
    case 'NGN':
      return `₦${formattedNumber}`;
    case 'GHS':
      return `GH₵${formattedNumber}`;
    case 'KES':
      return `KSh ${formattedNumber}`;
    case 'ZAR':
      return `R ${formattedNumber}`;
    case 'USD':
      return `$${formattedNumber}`;
    default:
      return `${currency} ${formattedNumber}`;
  }
}

/**
 * Generates Nigerian bank USSD dial strings.
 */
export function getUssdString(bankCode: string, amount: number, reference: string = '9021'): string {
  const sanitizedAmount = Math.max(1, Math.round(amount));
  switch (bankCode.toLowerCase()) {
    case 'gtb':
    case 'gtbank':
      return `*737*50*${sanitizedAmount}*${reference}#`;
    case 'zenith':
      return `*966*00*${sanitizedAmount}#`;
    case 'access':
      return `*901*00*${sanitizedAmount}#`;
    case 'uba':
      return `*919*00*${sanitizedAmount}#`;
    case 'firstbank':
      return `*894*00*${sanitizedAmount}#`;
    default:
      return `*737*50*${sanitizedAmount}*${reference}#`;
  }
}

/**
 * Validates email address format.
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Validates Nigerian phone numbers (+234 or 070/080/081/090/091).
 */
export function isValidNigerianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');
  const re = /^(\+234|0)[789][01]\d{8}$/;
  return re.test(cleaned);
}
