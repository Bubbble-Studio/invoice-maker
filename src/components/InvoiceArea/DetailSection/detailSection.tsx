/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";

const DetailsSection = () => {
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
        >
          <option value="invoice">INVOICE</option>
          <option value="quote">QUOTE</option>
          <option value="estimate">ESTIMATE</option>
        </Select>
      </Flex>

      <Flex flexDirection={"row"} padding={"1rem 0 0.5rem 0"}>
        <Flex width={"100%"}>
          <Button
            variant="outline"
            width={"50%"}
            height={"100%"}
            bgColor={"whiteAlpha.600"}
            border={"2px dashed"}
            borderColor={"gray.300"}
            boxShadow={"sm"}
            _hover={{ bg: "blue.100" }}
            padding={"0.5rem"}
          >
            Add Logo
          </Button>
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
                />
                <Textarea
                  padding={"1rem"}
                  width={"100%"}
                  placeholder="Address"
                />
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="GST IN"
                />
                <Input
                  type="email"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Email"
                />
                <Input
                  type="phone"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Phone No."
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
                />
                <Textarea
                  padding={"1rem"}
                  width={"100%"}
                  placeholder="Address"
                />
                <Input
                  type="text"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="GST IN"
                />
                <Input
                  type="email"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Email"
                />
                <Input
                  type="phone"
                  padding={"1.5rem"}
                  width={"100%"}
                  placeholder="Phone No."
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
