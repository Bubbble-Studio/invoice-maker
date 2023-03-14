```ts
interface Invoice {
  invoiceId: string;
  logo: string;
  date: Date;
  createdAt: string;
  dueDate: Date;
  billedBy: BillingDetails;
  billedTo: BillingDetails;
  items: InvoiceItem[];
  termsAndConditions: string;
  signature: string;
}

interface BillingDetails {
  name: string;
  address: string;
  gstIN?: string;
  email: string;
  phone: string;
}

interface InvoiceItem {
  srNo: number;
  itemCategory: string;
  quantity: number;
  amount: number;
  totalAmount: number;
  taxPercent?: number;
  amountInWords: string;
}
```
