import { z } from "zod";
import { Invoice, InvoiceItem, BillingDetails } from "./zodSchemas";

export type InvoiceType = z.infer<typeof Invoice>;
export type InvoiceItemType = z.infer<typeof InvoiceItem>;
export type BillingDetailsType = z.infer<typeof BillingDetails>;
