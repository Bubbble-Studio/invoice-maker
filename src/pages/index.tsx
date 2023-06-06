import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import InvoiceArea from "../components/InvoiceArea/InvoiceArea";
import { Heading, Text, Box, Center, Flex, Divider } from "@chakra-ui/react";

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
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          bgGradient={
            "linear(107.21deg, #BAE4F5 0%, #CDF1BF 53.31%, #F8FAA8 113.36%)"
          }
        >
          <Navbar />
          <Flex flexDirection={"column"} textAlign={"center"} color={"black"}>
            <h3
              style={{
                fontFamily: "Poppins",
                fontSize: "42px",
                fontWeight: "700",
                color: "#333333",
                marginTop: "0.8rem",
              }}
            >
              Invoice Maker
            </h3>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                color: "#333333",
                fontWeight: "400",
                marginBottom: "2rem",
              }}
            >
              Simplify your billing process with our user-friendly invoice
              maker, making financial management a breeze
            </p>
          </Flex>
        </Flex>
        <Divider />
        <InvoiceArea />
        <Divider />
      </main>
    </>
  );
}
