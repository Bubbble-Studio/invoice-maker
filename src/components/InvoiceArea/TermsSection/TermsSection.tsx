import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  CloseButton,
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
          >
            <AttachmentIcon mr={"0.2rem"} />
            Add Signature
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default TermsSection;
