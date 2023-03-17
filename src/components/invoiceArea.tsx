import styles from "./invoiceArea.module.css";
import { Box, Flex } from "@chakra-ui/react";
const InvoiceForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} margin={"1.5rem"}>
      <Box bg="gray.100" w="60%" p={4} border={"0.5px"} borderRadius={"lg"}>
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
                />
              </div>
            </fieldset>

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
                />
              </div>
            </fieldset>

            <div className={styles.itemDetails}>
              <div className={styles.itemForm}>
                <div className={styles.formGroup}>
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
                </div>

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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Box>
    </Flex>
  );
};

export default InvoiceForm;
