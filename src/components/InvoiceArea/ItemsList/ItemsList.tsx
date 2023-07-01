import {
  Box,
  Button,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Select,
} from "@chakra-ui/react";

import styles from "./itemList.module.scss";

import { convertNumberToWords } from "../../../utils/functions";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useInvoiceContext } from "@/utils/contexts/InvoiceContext";

const ItemsList = () => {
  const { items, setItems, gst, setGst, grandTotal, setGrandTotal } =
    useInvoiceContext();

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0, total: 0 }]);
  };

  const handlerChange = (event: any, i: number) => {
    const { name, value } = event.target || { name: "quantity", value: event };
    const list = [...items];
    list[i][name] = value;
    list[i]["total"] = list[i]["quantity"] * list[i]["price"];
    setItems(list);
  };

  const deleteItem = (i: number) => {
    const arr = [...items];
    arr.splice(i, 1);
    setItems(arr);
  };

  const totalAmount = items.reduce(
    (acc: number, curr: any) => acc + curr.total,
    0
  );

  const handleGstChange = (event: any) => {
    const { value } = event.target;
    setGst(value);
  };

  setGrandTotal((totalAmount + (totalAmount * gst) / 100).toFixed(2));

  const inWords = convertNumberToWords(grandTotal);

  return (
    <Box p={6} maxWidth="inherit" mx="auto">
      <div className={styles.taxAndCurrencySelect}>
        <div className={styles.selectBox}>
          <span>Tax</span>
          <Select width={"200px"} placeholder="select tax" color={"gray.500"}>
            <option value="tax">GST IN</option>
            <option value="tax">Tax</option>
          </Select>
        </div>

        <div className={styles.selectBox}>
          <span>Currency</span>
          <Select
            width={"250px"}
            placeholder="select currency"
            color={"gray.500"}
          >
            <option value="currency">INR ₹</option>
            <option value="currency">USD $</option>
            <option value="currency">EURO €</option>
            <option value="currency">YEN ¥</option>
            <option value="currency">AU $</option>
          </Select>
        </div>
      </div>
      <Box overflowX="auto">
        <Table variant={"unstyled"} size="sm" mt={"1.5rem"}>
          <Thead>
            <Tr background={"green.100"} height={"3rem"}>
              <Th width={"10%"}>Sr. No.</Th>
              <Th width={"30%"}>Description</Th>
              <Th width={"15%"}>Qty</Th>
              <Th width={"20%"}>Price ₹</Th>
              <Th width={"25%"}>Amount ₹</Th>
              <Th width={"5%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item: any, i: number) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>
                  <Input
                    border={"0.5px solid"}
                    borderColor={"gray.300"}
                    type="text"
                    name="name"
                    placeholder="Description"
                    value={item.name}
                    onChange={(e) => handlerChange(e, i)}
                  />
                </Td>
                <Td>
                  <NumberInput
                    border={"0.5px solid"}
                    borderColor={"gray.300"}
                    borderRadius={"md"}
                    size="md"
                    maxW={"40"}
                    step={1}
                    defaultValue={1}
                    min={1}
                    name="quantity"
                    aria-autocomplete="both"
                    value={item.quantity}
                    onChange={(e) => handlerChange(e, i)}
                    max={50}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper color={"gray.500"} />
                      <NumberDecrementStepper color={"gray.500"} />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <Input
                    border={"0.5px solid"}
                    borderColor={"gray.300"}
                    type="number"
                    name="price"
                    placeholder="₹"
                    value={item.price}
                    onChange={(e) => handlerChange(e, i)}
                  />
                </Td>
                <Td>{item.total.toFixed(2)}</Td>
                <Td>
                  <Button
                    borderRadius={"50%"}
                    width={"1.5rem"}
                    border={"0.5px dashed"}
                    size={"sm"}
                    color={"green.500"}
                    onClick={() => deleteItem(i)}
                  >
                    <MinusIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td colSpan={2}></Td>
              <Flex justifyContent="center" alignItems="center">
                <Button
                  width={"100%"}
                  className="add_item-btn"
                  onClick={addItem}
                  border={"0.5px dashed"}
                  borderColor={"green.300"}
                  backgroundColor={"transparent"}
                  color={"green.500"}
                  fontSize={"0.8rem"}
                  mt="1rem"
                >
                  <AddIcon marginRight={"0.5rem"} />
                  <Text>add another item</Text>
                </Button>
              </Flex>
            </Tr>
            <Tr>
              <Td colSpan={3}></Td>
              <Td>Total:</Td>
              <Td>₹ {totalAmount.toFixed(2)}</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={3}></Td>
              <Td>
                GST
                <Input
                  type="number"
                  name="gst"
                  width={"50px"}
                  margin={"1rem"}
                  border={"0.25px dashed"}
                  onChange={handleGstChange}
                  size={"sm"}
                  borderRadius={"0.25rem"}
                />
                %:
              </Td>
              <Td>₹ {((gst * totalAmount) / 100).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td colSpan={3}></Td>
              <Td>Grand Total:</Td>
              <Td>₹ {grandTotal}</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box className="totalSum" textAlign="end" mt="1rem">
        Total: ₹ {grandTotal}
      </Box>
      <Box className="inWords" textAlign="end" mt="1rem">
        In Words: {inWords}
      </Box>
    </Box>
  );
};

export default ItemsList;
