import { useState } from "react";
import styles from "./invoiceArea.module.css";

const InvoiceForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
  };
  const [invoiceNumber, setInvoiceNumber] = useState<String>();
  const [date, setDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(new Date());
  // const [billedBy, setBilledBy] = useState<String>("");
  const [bbname, setBbName] = useState<String>("");
  const [bbaddress, setBbAddress] = useState<String>("");
  const [bbgstIn, setBbGstIn] = useState<Number>();
  const [bbemail, setBbEmail] = useState<String>();
  const [bbphone, setBbNumber] = useState<Number>();

  // const [billedTo, setBilledTo] = useState<String>("");
  const [btname, setBtName] = useState<String>("");
  const [btaddress, setBtAddress] = useState<String>("");
  const [btgstIn, setBtGstIn] = useState<Number>();
  const [btemail, setBtEmail] = useState<String>();
  const [btphone, setBtNumber] = useState<Number>();

  // const [tax, settax] = useState<Number>(18);

  return (
    <div className={styles.invoiceArea}>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.invoiceDetails}>
          <legend>Invoice Details</legend>
          <div>
            <label htmlFor="invoice-number">Invoice Number</label>
            <input
              type="text"
              id="invoice-number"
              name="invoiceNumber"
              required
              className={styles.input}
              onChange = {(e)=>{setInvoiceNumber(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className={styles.input}
              onChange = {(e)=>{setDate(new Date(e.target.value))}}

            />
          </div>
          <div>
            <label htmlFor="due-date">Due Date</label>
            <input
              type="date"
              id="due-date"
              name="dueDate"
              required
              className={styles.input}
              onChange = {(e)=>{setDueDate(new Date(e.target.value))}}
            />
          </div>
        </fieldset>

        <fieldset className={styles.billedBy}>
          <legend>Billed By</legend>
          <div>
            <label htmlFor="billed-by-name">Name</label>
            <input
              type="text"
              id="billed-by-name"
              name="billedByName"
              required
              className={styles.input}
              onChange={(e)=>{setBbName(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-by-address">Address</label>
            <input
              type="text"
              id="billed-by-address"
              name="billedByAddress"
              required
              className={styles.input}
              onChange={(e)=>{setBbAddress(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-by-gst-in">GST IN</label>
            <input
              type="text"
              id="billed-by-gst-in"
              name="billedByGstIn"
              required
              className={styles.input}
              onChange={(e)=>{setBbGstIn(Number(e.target.value))}}
            />
          </div>
          <div>
            <label htmlFor="billed-by-email">Email</label>
            <input
              type="email"
              id="billed-by-email"
              name="billedByEmail"
              required
              className={styles.input}
              onChange={(e)=>{setBbEmail(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-by-phone">Phone</label>
            <input
              type="tel"
              id="billed-by-phone"
              name="billedByPhone"
              required
              className={styles.input}
              onChange={(e)=>{setBbNumber(Number(e.target.value))}}
            />
          </div>
        </fieldset>

    {/* Billed to component...... */}
        <fieldset className={styles.billedTo}>
          <legend>Billed To</legend>
          <div>
            <label htmlFor="billed-to-name">Name</label>
            <input
              type="text"
              id="billed-to-name"
              name="billedToName"
              required
              className={styles.input}
              onChange = {(e)=>{setBtName(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-to-address">Address</label>
            <input
              type="text"
              id="billed-to-address"
              name="billedToAddress"
              required
              className={styles.input}
              onChange = {(e)=>{setBtAddress(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-to-gst-in">GST IN</label>
            <input
              type="text"
              id="billed-to-gst-in"
              name="billedToGstIn"
              required
              className={styles.input}
              onChange = {(e)=>{setBtGstIn(Number(e.target.value))}}
            />
          </div>
          <div>
            <label htmlFor="billed-to-email">Email</label>
            <input
              type="email"
              id="billed-to-email"
              name="billedToEmail"
              required
              className={styles.input}
              onChange = {(e)=>{setBtEmail(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="billed-by-phone">Phone</label>
            <input
              type="tel"
              id="billed-by-phone"
              name="billedByPhone"
              required
              className={styles.input}
              onChange = {(e)=>{setBtNumber(Number(e.target.value))}}
            />
          </div>
        </fieldset>

        <div className={styles.itemDetails}>
          <div className={styles.itemForm}>
            {/* <div className={styles.formGroup}>
              <label htmlFor="srNo">Sr. No.</label>
              <input type="text" id="srNo" name="srNo" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="itemCategory">Item Category</label>
              <input type="text" id="itemCategory" name="itemCategory" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" name="amount" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="totalAmount">Total Amount</label>
              <input type="number" id="totalAmount" name="totalAmount" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tax">Tax</label>
              <input type="number" id="tax" name="tax" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="amountInWords">Amount in Words</label>
              <input type="text" id="amountInWords" name="amountInWords" />
            </div> */}

            <div className={styles.formGroup}>
              <label htmlFor="termsAndCondition">Terms and Condition</label>
              <textarea
                id="termsAndCondition"
                name="termsAndCondition"
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="signatureOrSeal">Signature/Seal</label>
              <input
                type="file"
                id="signatureOrSeal"
                name="signatureOrSeal"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
