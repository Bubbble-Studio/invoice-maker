import { useState } from "react";

const itemsList = ()=>{

    const [items, setItems] = useState<any>([{ name: "", quantity: 0, price: 0, total: 0 }]);
    const addItem = () => {
        setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
    };
    const handlerChange = (event:any, i:number) => {
        const { name, value } = event.target;
        const list = [...items];
        list[i][name] = value;
        list[i]["total"] = list[i]["quantity"] * list[i]["price"];
        setItems(list);
    };

    const deleteItem = (i:number) => {
        const arr = [...items];
        arr.splice(i, 1);
        setItems(arr);
    };

    const totalAmount = items.reduce((acc:number, curr:any) => acc + curr.total, 0);


    return(
        <div className="main__container">
            <div className="invoice__items">
                <h3>Item List</h3>
                {items?.map((item:any, i:number) => (
                <div className="items" key={i}>
                    <div className="item_i">
                        <div>
                            <p>S No.</p>
                            <h4>{i+1}</h4>
                        </div>
                        <div>
                            <p>Item Name</p>
                            <input
                            type="text"
                            name="name"
                            onChange={(e) => handlerChange(e, i)}
                            />
                        </div>

                        <div>
                            <p>Qty</p>
                            <input
                            type="number"
                            name="quantity"
                            onChange={(e) => handlerChange(e, i)}
                            />
                        </div>

                        <div>
                            <p>Price</p>
                            <input
                            type="number"
                            name="price"
                            onChange={(e) => handlerChange(e, i)}
                            />
                        </div>
                        <div>
                            <p>Total Amount</p>
                            <h4>{item.total}</h4>
                        </div>

                        <button className="delete-btn" onClick={() => deleteItem(i)}>
                            Delete
                        </button>
                    </div>
                </div>
                ))}
            </div>

            <button className="add_item-btn" onClick={addItem}>
                Add New Item
            </button>
        </div>
    );
}


export default itemsList;