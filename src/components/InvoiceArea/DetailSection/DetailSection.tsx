/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Image,
  Select,
  Textarea,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AttachmentIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

const DetailsSection = () => {
  const [type, setType] = useState("");

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  const [invoiceNumber, setInvoiceNumber] = useState("");

  const handleInvoiceNumberChange = (event: any) => {
    setInvoiceNumber(event.target.value);
  };

  const [invoiceDate, setInvoiceDate] = useState("");

  const handleInvoiceDateChange = (event: any) => {
    setInvoiceDate(event.target.value);
  };

  const [dueDate, setDueDate] = useState("");

  const handleDueDateChange = (event: any) => {
    setDueDate(event.target.value);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [logo, setLogo] = useState<string | null>(null);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
  };

  const handleReplaceClick = () => {
    setLogo(null);
  };

  const [billedBy, setBilledBy] = useState({
    businessName: "",
    address: "",
    gstIn: "",
    email: "",
    phone: "",
  });

  const handleBilledByInputChange = (e: any) => {
    const { name, value } = e.target;
    setBilledBy((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [billedTo, setBilledTo] = useState({
    businessName: "",
    address: "",
    gstIn: "",
    email: "",
    phone: "",
  });

  const handleBilledToInputChange = (e: any) => {
    const { name, value } = e.target;
    setBilledTo((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box width={"100%"}>
      <Flex>
        <Select
          placeholder="Type"
          variant={"outline"}
          bg={"whiteAlpha.600"}
          textAlign={"center"}
          height={"4rem"}
          size={"lg"}
          boxShadow={"sm"}
          width={"100%"}
          padding={"1rem 0 0.5rem 0"}
          onChange={handleTypeChange}
          value={type}
        >
          <option value="invoice">INVOICE</option>
          <option value="quote">QUOTE</option>
          <option value="estimate">ESTIMATE</option>
        </Select>
      </Flex>

      <Flex flexDirection={"row"} padding={"1rem 0 0.5rem 0"}>
        <Flex width={"100%"}>
          <Box p={1}>
            {logo ? (
              <Box borderColor="gray.200">
                <Box maxW={"198"} mx="auto">
                  <Image src={logo} alt="logo" />
                </Box>
                <Button mt={1} onClick={handleReplaceClick} color="red.500">
                  <MinusIcon mr={"0.5rem"} />
                  Replace Logo
                </Button>
              </Box>
            ) : (
              <Button
                variant="outline"
                width={"198px"}
                minWidth={"fit-content"}
                height={"100%"}
                bgColor={"whiteAlpha.600"}
                border={"2px dashed"}
                borderColor={"gray.300"}
                boxShadow={"sm"}
                _hover={{ bg: "blue.100" }}
                padding={"0.5rem"}
                colorScheme="blue"
                onClick={onOpen}
              >
                <AttachmentIcon mr={"0.5rem"} />
                Upload Logo
              </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Upload Logo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <input type="file" onChange={handleImageUpload} />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
        <Flex width={"fir"}>
          <Flex flexDirection={"column"}>
            <InputGroup size={"xs"}>
              <InputLeftAddon
                children="Invoice No."
                bg={"whiteAlpha.600"}
                padding={"2rem"}
                width={"125px"}
                borderRadius={"5px 0 0 5px"}
              />
              <Input
                placeholder="invoice number"
                type="number"
                bg={"white"}
                padding={"2rem"}
                borderRadius={"0 5px 5px 0"}
                width={"100%"}
                onChange={handleInvoiceNumberChange}
                value={invoiceNumber}
              />
            </InputGroup>

            <InputGroup size={"xs"}>
              <InputLeftAddon
                children="Invoice Date"
                bg={"whiteAlpha.600"}
                padding={"2rem"}
                width={"125px"}
                borderRadius={"5px 0 0 5px"}
              />
              <Input
                placeholder="Select Date"
                type="date"
                bg={"white"}
                padding={"2rem"}
                borderRadius={"0 5px 5px 0"}
                onChange={handleInvoiceDateChange}
                value={invoiceDate}
              />
            </InputGroup>

            <InputGroup size={"xs"}>
              <InputLeftAddon
                children="Due Date"
                bg={"whiteAlpha.600"}
                padding={"2rem"}
                width={"125px"}
                borderRadius={"5px 0 0 5px"}
              />
              <Input
                placeholder="Select Date"
                type="date"
                bg={"white"}
                padding={"2rem"}
                borderRadius={"0 5px 5px 0"}
                onChange={handleDueDateChange}
                value={dueDate}
              />
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
      {/* Billed By */}
      <Flex flexDirection={"row"} width={"100%"} padding={"1rem 0 1rem 0"}>
        <Flex width={"100%"} marginRight={"0.5rem"}>
          <Box
            bgColor={"whiteAlpha.600"}
            boxShadow={"md"}
            width={"100%"}
            height={"fit-content"}
            borderRadius={"md"}
          >
            <Flex margin="1rem" flexDirection={"column"}>
              <Text fontSize="xl" padding={"0.5rem 0rem 0rem 1rem"}>
                Billed By
              </Text>
              <VStack spacing={"2"} margin={"1rem"}>
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Business Name"
                  name="businessName"
                  value={billedBy.businessName}
                  onChange={handleBilledByInputChange}
                />
                <Textarea
                  padding={"1rem"}
                  width={"100%"}
                  placeholder="Address"
                  name="address"
                  value={billedBy.address}
                  onChange={handleBilledByInputChange}
                />
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="GST IN"
                  name="gstIn"
                  value={billedBy.gstIn}
                  onChange={handleBilledByInputChange}
                />
                <Input
                  type="email"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Email"
                  name="email"
                  value={billedBy.email}
                  onChange={handleBilledByInputChange}
                />
                <Input
                  type="phone"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Phone No."
                  name="phone"
                  value={billedBy.phone}
                  onChange={handleBilledByInputChange}
                />
              </VStack>
            </Flex>
          </Box>
        </Flex>
        {/* Billed To */}
        <Flex width={"100%"} marginLeft={"0.5rem"}>
          <Box
            bgColor={"whiteAlpha.600"}
            boxShadow={"md"}
            width={"100%"}
            height={"fit-content"}
            borderRadius={"md"}
            justifySelf={"end"}
          >
            <Flex margin="1rem" flexDirection={"column"}>
              <Text fontSize="xl" padding={"0.5rem 0rem 0rem 1rem"}>
                Billed To
              </Text>
              <VStack spacing={"2"} margin={"1rem"} justifyItems="flex-start">
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Business Name"
                  name="businessName"
                  value={billedTo.businessName}
                  onChange={handleBilledToInputChange}
                />
                <Textarea
                  padding={"1rem"}
                  width={"100%"}
                  placeholder="Address"
                  name="address"
                  value={billedTo.address}
                  onChange={handleBilledToInputChange}
                />
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="GST IN"
                  name="gstIn"
                  value={billedTo.gstIn}
                  onChange={handleBilledToInputChange}
                />
                <Input
                  type="email"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Email"
                  name="email"
                  value={billedTo.email}
                  onChange={handleBilledToInputChange}
                />
                <Input
                  type="phone"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Phone No."
                  name="phone"
                  value={billedTo.phone}
                  onChange={handleBilledToInputChange}
                />
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DetailsSection;
