import styles from "./invoiceArea.module.css";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
import DetailsSection from "./DetailSection/DetailSection";
import ItemsList from "./ItemsList/ItemsList";
import TermsSection from "./TermsSection/TermsSection";
import { useInvoiceContext } from "@/utils/contexts/InvoiceContext";

const InvoiceForm = () => {
  const { details, items, gst, terms, signature } = useInvoiceContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const finalValues = {
      details,
      items,
      gst,
      terms,
      signature,
    };

    console.log(finalValues);
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
