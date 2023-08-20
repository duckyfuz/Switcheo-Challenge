interface Currency {
  label: string;
  value: string;
}

interface FormValues {
  recipient: string;
  amount: string;
  currency: string;
  otp: string;
}
interface FormErrors {
  recipient: boolean;
  amount: boolean;
  otp: boolean;
}

export type { Currency, FormValues, FormErrors };
