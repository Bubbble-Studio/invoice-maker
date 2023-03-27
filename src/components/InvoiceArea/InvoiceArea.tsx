import styles from "./invoiceArea.module.css";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import DetailsSection from "./DetailSection/DetailSection";
import ItemsList from "./ItemsList/ItemsList";
import TermsSection from "./TermsSection/TermsSection";
import { useInvoiceContext } from "@/utils/contexts/InvoiceContext";
import { useState } from "react";

const InvoiceForm = () => {
  const { details, items, gst, terms, signature } = useInvoiceContext();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const invoiceData = {
      invoiceId: Date.now().toString(),
      details,
      items,
      gst,
      terms,
      signature,
    };

    fetch("/api/create-invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Invoice created successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        alert("Something went wrong");
        setLoading(false);
      });
  };

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
