import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Textarea,
  CloseButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  AddIcon,
  AttachmentIcon,
  MinusIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";

const TermsSection = () => {
  const [terms, setTerms] = useState<string[]>([""]);

  const addTerm = () => {
    setTerms([...terms, ""]);
  };

  const removeTerm = (index: number) => {
    const newTerms = [...terms];
    newTerms.splice(index, 1);
    setTerms(newTerms);
  };

  const handleChange = (index: number, value: string) => {
    const newTerms = [...terms];
    newTerms[index] = value;
    setTerms(newTerms);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signature, setSignature] = useState<string | null>(null);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSignature(reader.result as string);
    };
  };

  const handleReplaceClick = () => {
    setSignature(null);
  };

  return (
    <Box mt={"1rem"}>
      <Text fontSize="xl" fontWeight="bold" mb="4" textAlign={"center"}>
        Terms and Conditions
      </Text>
      {terms.map((term, index) => (
        <Flex key={index} mb="2" alignItems={"center"}>
          <Box as="span" mr="2">
            {index + 1}
            {"."}
          </Box>
          <Textarea
            size={"sm"}
            minHeight="2.4rem"
            alignItems={"center"}
            borderColor={"gray.300"}
            borderRadius={"5px"}
            placeholder="Enter term"
            value={term}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <CloseButton
            ml="2"
            size="sm"
            onClick={() => removeTerm(index)}
            aria-label="Remove term"
          >
            <MinusIcon color={"red"} />
          </CloseButton>
        </Flex>
      ))}
      <Button size="sm" onClick={addTerm} mt="2">
        <PlusSquareIcon mr={"0.2rem"} />
        Add Term
      </Button>
      <Box mt={"3rem"}>
        <Flex justifyContent={"end"}>
          {signature ? (
            <Box borderColor="gray.200">
              <Box maxW={"100"} mx="auto">
                <Image src={signature} alt="signature" />
              </Box>
              <Button mt={1} onClick={handleReplaceClick} color="red.500">
                <MinusIcon mr={"0.5rem"} />
                Replace signature
              </Button>
            </Box>
          ) : (
            <Button
              bgColor={"whiteAlpha.600"}
              _hover={{
                bg: "green.100",
              }}
              color={"blackAlpha.800"}
              border={"2px dashed"}
              borderColor={"gray.300"}
              boxShadow={"sm"}
              width={"fit-content"}
              padding={"2rem"}
              onClick={onOpen}
            >
              <AttachmentIcon mr={"0.5rem"} />
              Add signature
            </Button>
          )}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Upload Signature</ModalHeader>
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
        </Flex>
      </Box>
    </Box>
  );
};

export default TermsSection;
