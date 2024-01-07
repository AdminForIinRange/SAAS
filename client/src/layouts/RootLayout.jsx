import { Outlet } from "react-router-dom";
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
  Heading,
} from "@chakra-ui/react";
// components
import Navbar from "../components/Navbar.jsx";

export default function RootLayout() {
  return (
    <div className="Layout">
      <Grid>
        <GridItem>
          <Navbar />
        </GridItem>

        <GridItem>
         
         
        </GridItem>
      </Grid>

      <Outlet />
    </div>
  );
}
