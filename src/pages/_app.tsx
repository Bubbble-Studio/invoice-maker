import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { InvoiceContextProvider } from "@/utils/contexts/InvoiceContext";
import "@fontsource/poppins/400.css";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins'`,
    body: `'Poppins'`,
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <InvoiceContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </InvoiceContextProvider>
  );
}
