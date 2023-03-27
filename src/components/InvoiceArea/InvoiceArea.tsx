import styles from "./invoiceArea.module.css";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import DetailsSection from "./DetailSection/DetailSection";
import ItemsList from "./ItemsList/ItemsList";
import TermsSection from "./TermsSection/TermsSection";
import { useInvoiceContext } from "@/utils/contexts/InvoiceContext";
import { useEffect, useState } from "react";

const InvoiceForm = () => {
  const { details, items, gst, terms, signature } = useInvoiceContext();

  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const invoiceData = {
      details,
      items,
      gst,
      terms,
      signature,
    };

    setInvoiceData(invoiceData);
  };

  useEffect(() => {
    fetch("/api/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [invoiceData]);

  if (error) {
    return (
      <div>
        <h3>ERROR while sending Data!!!</h3>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex justifyContent={"center"} alignItems={"center"} margin={"1.5rem"}>
      {/* box sized as A4 size  */}
      <Box
        bg="gray.100"
        h="fit-content"
        w="60%"
        p={4}
        border={"0.5px"}
        borderRadius={"lg"}
      >
        <form onSubmit={handleSubmit}>
          <DetailsSection />
          <Divider />
          <ItemsList />
          <Divider />
          <TermsSection />
          <Divider />
          <Box textAlign={"center"}>
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default InvoiceForm;
