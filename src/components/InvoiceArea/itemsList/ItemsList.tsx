// return (
// <div className={styles.main__container} style={styles}>
//   <div className="invoice__items">
//     <h3>Item List</h3>
//     <div className="items">
//       <div className={styles.item_head} style={{ display: "flex" }}>
//         <div style={{ padding: "1vw", margin: "1vw", width: "6%" }}>
//           <p>Sr No.</p>
//         </div>
//         <div style={{ padding: "1vw", margin: "1vw", width: "29%" }}>
//           <p>Item Name</p>
//         </div>

//         <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//           <p>Qty</p>
//         </div>

//         <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//           <p>Price</p>
//         </div>
//         <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//           <p>Total Amount</p>
//         </div>
//       </div>
//     </div>
//     {items?.map((item: any, i: number) => (
//       <div className="items" key={i}>
//         <div className={styles.item_i} style={{ display: "flex" }}>
//           <div style={{ padding: "1vw", margin: "1vw", width: "6%" }}>
//             {/* <p>Sr No.</p> */}
//             <h4>{i + 1}</h4>
//           </div>
//           <div style={{ padding: "1vw", margin: "1vw", width: "29%" }}>
//             {/* <p>Item Name</p> */}
//             <input
//               type="text"
//               name="name"
//               onChange={(e) => handlerChange(e, i)}
//             />
//           </div>

//           <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//             {/* <p>Qty</p> */}
//             <input
//               type="number"
//               name="quantity"
//               onChange={(e) => handlerChange(e, i)}
//             />
//           </div>

//           <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//             {/* <p>Price</p> */}
//             <input
//               type="number"
//               name="price"
//               onChange={(e) => handlerChange(e, i)}
//             />
//           </div>
//           <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
//             {/* <p>Total Amount</p> */}
//             <h4>{item.total}</h4>
//           </div>

//           <div style={{ padding: "1vw", margin: "1vw" }}>
//             <Button className="delete-btn" onClick={() => deleteItem(i)}>
//               Delete
//             </Button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Button className="add_item-btn" onClick={addItem}>
//       Add New Item
//     </Button>
//   </div>

//   <div className="totalSum" style={{ textAlign: "end", margin: "1vw" }}>
//     Total : {totalAmount}
//   </div>
// </div>

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ItemsList = () => {
  const [items, setItems] = useState<any>([
    { name: "", quantity: 0, price: 0, total: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
  };

  const handlerChange = (event: any, i: number) => {
    const { name, value } = event.target;
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

  const [gst, setGst] = useState(0);

  const handleGstChange = (event: any) => {
    const { value } = event.target;
    setGst(value);
  };

  const grandTotal = totalAmount + (totalAmount * gst) / 100;

  return (
    <Box p={6} maxWidth="inherit" mx="auto">
      <Box overflowX="auto">
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Item</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Amount</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item: any, i: number) => (
              <Tr key={i}>
                <Td>{i + 1}</Td>
                <Td>
                  <Input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handlerChange(e, i)}
                  />
                </Td>
                <Td>
                  <Input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handlerChange(e, i)}
                  />
                </Td>
                <Td>
                  <Input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={(e) => handlerChange(e, i)}
                  />
                </Td>
                <Td>{item.total.toFixed(2)}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => deleteItem(i)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td colSpan={4}></Td>
              <Td>Total:</Td>
              <Td>{totalAmount.toFixed(2)}</Td>
              <Td></Td>
            </Tr>
            {/* Take user input for GST and calculate the total amount */}
            <Tr>
              <Td colSpan={4}></Td>
              <Td>GST %:</Td>
              <Td>
                <Input
                  type="number"
                  name="gst"
                  width={"60%"}
                  border={"0.25px solid gray"}
                  onChange={handleGstChange}
                  size={"sm"}
                  borderRadius={"0.25rem"}
                />
              </Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={4}></Td>
              <Td>Grand Total:</Td>
              <Td>{grandTotal}</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Flex justifyContent="center" alignItems="center">
        <Button
          className="add_item-btn"
          onClick={addItem}
          colorScheme="green"
          mt="1rem"
        >
          Add New Item
        </Button>
      </Flex>

      <Box className="totalSum" textAlign="end" mt="1rem">
        Total: {grandTotal}
      </Box>
    </Box>
  );
};

export default ItemsList;
