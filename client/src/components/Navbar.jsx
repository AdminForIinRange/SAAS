import {
  Flex,
  Button,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Text,
  Image,
  Stack,
  InputLeftElement,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  MenuItemOption,
  MenuOptionGroup,
  HStack,
  VStack,
  InputGroup,
  Select,
  Container,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";

export default function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Flex
        fontSize="xs"
        as="nav"
        flexDirection="row"
        justifyContent={isSmallScreen ? "right" : "Center"}
        alignItems="center"
      >
        <Box className="NavBar">
          <Flex
            justifyContent="center"
            alignItems="center"
            p="5px"
            gap={"25px"}
          >
            {isSmallScreen ? (
              <Menu>
                <MenuButton as={Button} color={"black"} variant="outline">
                  <HamburgerIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Services</MenuItem>

                  <MenuItem>About</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Testimonial</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <HStack gap={"100px"} className="NavBar">
                <NavLink to="/">
                  <Button
                    fontSize="sm"
                    color={"Black"}
                    variant="ghost"
                    w="auto"
                  >
                    Home
                  </Button>
                </NavLink>
                <NavLink to="Services">
                  <Button
                    fontSize="sm"
                    color={"Black"}
                    variant="ghost"
                    w="auto"
                  >
                    Services
                  </Button>
                </NavLink>
                <NavLink to="About">
                  <Button
                    fontSize="sm"
                    color={"Black"}
                    variant="ghost"
                    w="auto"
                  >
                    About
                  </Button>
                </NavLink>
                <NavLink to="Projects">
                  <Button
                    fontSize="sm"
                    color={"Black"}
                    variant="ghost"
                    w="auto"
                  >
                    Projects
                  </Button>
                </NavLink>
                <NavLink to="Testimonial">
                  <Button
                    fontSize="sm"
                    color={"Black"}
                    variant="ghost"
                    w="auto"
                  >
                    Testimonial
                  </Button>
                </NavLink>
              </HStack>
            )}
          </Flex>
          <Divider />
        </Box>
      </Flex>
    </>
  );
}
