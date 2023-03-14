import { z } from "zod";

const BillingDetails = z.object({
  name: z.string().min(3),
  address: z.string().min(3),
  gstIN: z.string().optional(),
  email: z.string().email().min(5),
  phone: z.string().min(10).max(15),
});

const InvoiceItem = z.object({
  srNo: z.number(),
  itemCategory: z.string(),
  quantity: z.number().min(1),
  amount: z.number().min(0),
  totalAmount: z.number().min(0),
  taxPercent: z.number().min(0).optional(),
  amountInWords: z.string().min(3),
});

const Invoice = z.object({
  invoiceId: z.string(),
  logo: z.string().optional(),
  date: z.date(),
  createdAt: z.string(),
  modifiedAt: z.string(),
  dueDate: z.date(),
  billedBy: BillingDetails,
  billedTo: BillingDetails,
  items: z.array(InvoiceItem),
  termsAndConditions: z.string(),
  signature: z.string(),
});

export { Invoice, InvoiceItem, BillingDetails };
