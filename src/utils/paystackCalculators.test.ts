import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePaystackFee,
  formatCurrency,
  getUssdString,
  isValidEmail,
  isValidNigerianPhone,
} from './paystackCalculators.ts';

test('Paystack Fee: under 2500 NGN has NGN 100 flat fee waived', () => {
  const result = calculatePaystackFee(2000, false);
  // 1.5% of 2000 = 30 NGN, flat fee = 0
  assert.equal(result.fee, 30);
  assert.equal(result.flatFee, 0);
  assert.equal(result.netPayout, 1970);
  assert.equal(result.isCapped, false);
});

test('Paystack Fee: 2500 NGN or above includes NGN 100 flat fee', () => {
  const result = calculatePaystackFee(10000, false);
  // 1.5% of 10000 = 150 NGN + 100 = 250 NGN
  assert.equal(result.fee, 250);
  assert.equal(result.flatFee, 100);
  assert.equal(result.netPayout, 9750);
  assert.equal(result.isCapped, false);
});

test('Paystack Fee: capped at NGN 2000 for large local transactions', () => {
  const result = calculatePaystackFee(200000, false);
  // 1.5% of 200000 is 3000 + 100 = 3100 -> capped at 2000
  assert.equal(result.fee, 2000);
  assert.equal(result.netPayout, 198000);
  assert.equal(result.isCapped, true);
});

test('Paystack Fee: international transactions charge 3.9% + 100 NGN and are not capped', () => {
  const result = calculatePaystackFee(100000, true);
  // 3.9% of 100000 = 3900 + 100 = 4000
  assert.equal(result.fee, 4000);
  assert.equal(result.netPayout, 96000);
  assert.equal(result.isCapped, false);
});

test('Currency Formatting: formats currencies with correct symbols', () => {
  assert.equal(formatCurrency(5000, 'NGN'), '₦5,000');
  assert.equal(formatCurrency(250, 'USD'), '$250');
  assert.equal(formatCurrency(1200, 'GHS'), 'GH₵1,200');
  assert.equal(formatCurrency(3500, 'KES'), 'KSh 3,500');
  assert.equal(formatCurrency(450, 'ZAR'), 'R 450');
});

test('USSD generation: produces proper dial codes', () => {
  assert.equal(getUssdString('gtb', 5000, '1234'), '*737*50*5000*1234#');
  assert.equal(getUssdString('zenith', 2500), '*966*00*2500#');
  assert.equal(getUssdString('access', 10000), '*901*00*10000#');
});

test('Validation: emails and Nigerian phone numbers validate correctly', () => {
  assert.equal(isValidEmail('hello@paystack.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);

  assert.equal(isValidNigerianPhone('+2348012345678'), true);
  assert.equal(isValidNigerianPhone('08031234567'), true);
  assert.equal(isValidNigerianPhone('09091234567'), true);
  assert.equal(isValidNigerianPhone('12345'), false);
});
