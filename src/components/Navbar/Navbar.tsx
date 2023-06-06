import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <Flex justifyContent="center" mt={"30px"}>
      <Flex right="1rem" align="center">
        {/* Desktop */}
        <Flex
          display={["none", "none", "flex", "flex"]}
          justifyContent="space-between"
          w="252px"
        >
          {menuItems.map((item) => (
            <NextLink key={item.link} href={item.link} passHref>
              <Button
                color={"black"}
                as="a"
                variant="link"
                aria-label={item.label}
                my={5}
                w="100%"
              >
                {item.label}
              </Button>
            </NextLink>
          ))}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          left="2rem"
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {menuItems.map((item) => (
            <NextLink key={item.link} href={item.link} passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label={item.label}
                my={5}
                w="100%"
              >
                {item.label}
              </Button>
            </NextLink>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
