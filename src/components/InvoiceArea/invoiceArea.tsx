import styles from "./invoiceArea.module.css";
import { Box, Divider, Flex } from "@chakra-ui/react";
import DetailsSection from "./DetailSection/detailSection";
import ItemsList from "../itemsList/itemsList";

const InvoiceForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
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
        </form>
      </Box>
    </Flex>
  );
};

export default InvoiceForm;
