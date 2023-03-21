import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import styles from "./itemsList.module.css";
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

  return (
    <div className={styles.main__container} style={styles}>
      <div className="invoice__items">
        <h3>Item List</h3>
        <div className="items">
          <div className={styles.item_head} style={{ display: "flex" }}>
            <div style={{ padding: "1vw", margin: "1vw", width: "6%" }}>
              <p>Sr No.</p>
            </div>
            <div style={{ padding: "1vw", margin: "1vw", width: "29%" }}>
              <p>Item Name</p>
            </div>

            <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
              <p>Qty</p>
            </div>

            <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
              <p>Price</p>
            </div>
            <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
              <p>Total Amount</p>
            </div>
          </div>
        </div>
        {items?.map((item: any, i: number) => (
          <div className="items" key={i}>
            <div className={styles.item_i} style={{ display: "flex" }}>
              <div style={{ padding: "1vw", margin: "1vw", width: "6%" }}>
                {/* <p>Sr No.</p> */}
                <h4>{i + 1}</h4>
              </div>
              <div style={{ padding: "1vw", margin: "1vw", width: "29%" }}>
                {/* <p>Item Name</p> */}
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handlerChange(e, i)}
                />
              </div>

              <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
                {/* <p>Qty</p> */}
                <input
                  type="number"
                  name="quantity"
                  onChange={(e) => handlerChange(e, i)}
                />
              </div>

              <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
                {/* <p>Price</p> */}
                <input
                  type="number"
                  name="price"
                  onChange={(e) => handlerChange(e, i)}
                />
              </div>
              <div style={{ padding: "1vw", margin: "1vw", width: "15%" }}>
                {/* <p>Total Amount</p> */}
                <h4>{item.total}</h4>
              </div>

              <div style={{ padding: "1vw", margin: "1vw" }}>
                <Button className="delete-btn" onClick={() => deleteItem(i)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button className="add_item-btn" onClick={addItem}>
          Add New Item
        </Button>
      </div>

      <div className="totalSum" style={{ textAlign: "end", margin: "1vw" }}>
        Total : {totalAmount}
      </div>
    </div>
  );
};

export default ItemsList;
