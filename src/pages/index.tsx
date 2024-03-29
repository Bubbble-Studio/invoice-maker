import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import InvoiceArea from "../components/InvoiceArea/InvoiceArea";
import { Divider } from "@chakra-ui/react";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoice maker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.headerContainer}>
          <div className={styles.navbar}>
            <Navbar />
            <div className={styles.headerTitle}>
              <h3>Invoice Maker</h3>
            </div>
          </div>
          <div className={styles.headerContent}>
            <p>
              Simplify your billing process with our user-friendly invoice
              maker, making financial management a breeze
            </p>
          </div>
        </div>
        <InvoiceArea />
      </main>
    </>
  );
}
