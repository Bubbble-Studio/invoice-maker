import { z } from "zod";

const BillingDetails = z.object({
  businessName: z.string().min(3),
  address: z.string().min(3),
  taxInfo: z.object({
    PAN: z.string(),
    TAN: z.string(),
  }),
  email: z.string().email().min(5),
  phone: z.string().min(10).max(15),
});

const InvoiceItem = z.object({
  name: z.string(),
  quantity: z.number().min(1),
  amount: z.number().min(0),
  totalAmount: z.number().min(0),
});

const Invoice = z.object({
  invoiceId: z.string(), //
  type: z.string(), //
  logo: z.string().optional(), //
  createdAt: z.number(), //
  modifiedAt: z.number(), //
  invoiceDate: z.number(), //
  dueDate: z.number(), //
  billedBy: BillingDetails, //
  billedTo: BillingDetails, //
  items: z.array(InvoiceItem),
  taxPercent: z.number().min(0).optional(), //
  grandTotal: z.number().min(0), //
  termsAndConditions: z.array(z.string()).optional(), //
  signature: z.string().optional(), //
});

export { Invoice, InvoiceItem, BillingDetails };
