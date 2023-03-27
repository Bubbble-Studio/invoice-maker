import { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/utils/firebase/config";
import { InvoiceType } from "@/utils/interfaces";
import { collection, doc, setDoc } from "firebase/firestore";

interface Response {
  status: string;
  message: string;
  data: InvoiceType | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    if (req.method === "POST") {
      const invoice = req.body;
      const collectionRef = collection(database, "invoices");
      const docRef = doc(collectionRef, invoice.invoiceId);
      setDoc(docRef, invoice);
      res.status(200).json({
        status: "success",
        message: "Invoice created successfully",
        data: invoice,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: null,
    });
  }
}
