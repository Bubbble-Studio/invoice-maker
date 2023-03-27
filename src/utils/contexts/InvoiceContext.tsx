import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext<any>(null);

export const InvoiceContextProvider = ({ children }: any) => {
  const [details, setDetails] = useState<any>({
    type: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    logo: "",
    billedBy: {
      businessName: "",
      address: "",
      gstIn: "",
      email: "",
      phone: "",
    },
    billedTo: {
      name: "",
      address: "",
      gstIn: "",
      email: "",
      phone: "",
    },
  });

  const [items, setItems] = useState<any>([
    { name: "", quantity: 1, price: 0, total: 0 },
  ]);

  const [gst, setGst] = useState(0);

  const [grandTotal, setGrandTotal] = useState(0);

  const [terms, setTerms] = useState<string[]>([""]);

  const [signature, setSignature] = useState<string | null>(null);

  return (
    <InvoiceContext.Provider
      value={{
        details,
        setDetails,
        items,
        setItems,
        gst,
        setGst,
        grandTotal,
        setGrandTotal,
        terms,
        setTerms,
        signature,
        setSignature,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;

export const useInvoiceContext = () => {
  return useContext(InvoiceContext);
};
