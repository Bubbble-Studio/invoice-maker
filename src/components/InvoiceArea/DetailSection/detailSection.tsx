/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  extendTheme,
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
  StackDivider,
} from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const DetailsSection = () => {
  return (
    <Grid
      h="90vh"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={"10px"}
    >
      {/* type item  */}
      <GridItem
        gridArea={"1 / 1 / 2 / 3"}
        bg="inherit"
        width={"100%"}
        height={"fit-content"}
      >
        <Flex justifyContent={"center"}>
          <Select
            placeholder="Type"
            variant={"outline"}
            bg={"whiteAlpha.600"}
            textAlign={"center"}
            height={"4rem"}
            size={"lg"}
            boxShadow={"sm"}
          >
            <option value="invoice">INVOICE</option>
            <option value="quote">QUOTE</option>
            <option value="estimate">ESTIMATE</option>
          </Select>
        </Flex>
      </GridItem>
      <GridItem gridArea={"2 / 1 / 5 / 3"} bgColor={"inherit"}>
        <Button
          variant="outline"
          width={"100%"}
          height={"100%"}
          bgColor={"whiteAlpha.600"}
          border={"2px dashed"}
          borderColor={"gray.300"}
          boxShadow={"sm"}
          _hover={{ bg: "blue.100" }}
        >
          Add Logo
        </Button>
      </GridItem>
      <GridItem gridArea={"2 / 5 / 3 / 7"} bg="inherit" boxShadow={"sm"}>
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
          />
        </InputGroup>
      </GridItem>
      {/* date item  */}
      <GridItem gridArea={"3 / 5 / 4 / 7"} bg="inherit" boxShadow={"sm"}>
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
      </GridItem>
      {/* date item  */}
      <GridItem gridArea={"4 / 5 / 5 / 7"} bg="inherit" boxShadow={"sm"}>
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
      </GridItem>
      {/* Billed By */}
      <GridItem gridArea={"5 / 1 / 8 / 4"} marginTop="2rem">
        <Flex>
          <Box
            bgColor={"whiteAlpha.600"}
            boxShadow={"xl"}
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
      </GridItem>

      {/* Billed To */}
      <GridItem gridArea={"5 / 4 / 8 / 7"} marginTop={"2rem"}>
        <Flex justifyContent={"end"}>
          <Box
            bgColor={"whiteAlpha.600"}
            boxShadow={"xl"}
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
      </GridItem>
    </Grid>
  );
};

export default DetailsSection;
