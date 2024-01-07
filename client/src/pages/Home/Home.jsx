import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Container,
} from "@chakra-ui/react";
import { FaRunning } from "react-icons/fa";
import { FaCode, FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./LocalStyle/homeStyles.css";
import codearrow from "../../images/Screenshot 2023-12-28 023957.png";
import arrowimg from "../../images/Screenshot 2023-12-28 015641.png";
import failB from "../../images/anob.png";
import AB from "../../images/Screenshot 2023-12-28 204513.png";
import Drawing from "../../images/minginab.png";
export default function Home() {
  const [pageTwo, setPageTwo] = useState(false);
  const [pageThree, setPageThree] = useState(false);
  const [pageFour, setPageFour] = useState(false);
  const [pageFive, setPageFive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 1200) {
        setPageTwo(true);
      } else {
        setPageTwo(false);
      }

      if (scrollPosition >= 2000) {
        setPageThree(true);
      } else {
        setPageThree(false);
      }

      if (scrollPosition >= 3500) {
        setPageFour(true);
      } else {
        setPageFour(false);
      }

      if (scrollPosition >= 4600) {
        setPageFive(true);
      } else {
        setPageFive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <>

    <div
        style={{
          position: "fixed",

        
          top: "200px",
          left:"93.5%"
        }}
      >
        <Stack pos={"absolute"} direction="row" h="500px" align={"left"}>
          <Divider borderColor={"black"} orientation="vertical" />
          <VStack  align={"right"} gap={"5%"} textAlign={"left"}  w={"100px"}>
            <Button  fontSize={"15px"} onClick={() => scrollToPosition(1)}  textAlign={"left"} colorScheme="gray" variant="ghost">
              Recognize
            </Button>
            {pageTwo ? (
              <Button   fontSize={"15px"}
                onClick={() => scrollToPosition(1575)}
                textAlign={"left"}
                colorScheme="gray"
                variant="ghost"
              >
                Conceptualize
              </Button>
            ) : null}
            {pageThree ? (
              <Button fontSize={"15px"}
                onClick={() => scrollToPosition(2650)}
                textAlign={"left"}
                colorScheme="gray"
                variant="ghost"
              >
                Initialize
              </Button>
            ) : null}
            {pageFour ? (
              <Button fontSize={"15px"}
                onClick={() => scrollToPosition(4000)}
                textAlign={"left"}
                colorScheme="gray"
                variant="ghost"
              >
                Optimize
              </Button>
            ) : null}

            {pageFive ? (
              <Button fontSize={"15px"}
                onClick={() => scrollToPosition(5100)}
                textAlign={"left"}
                colorScheme="gray"
                variant="ghost"
              >
                Standardize
              </Button>
            ) : null}
          </VStack>
        </Stack>
      </div>



     
      <VStack
        m={"3%"}
       
        justifyContent={"left"}
        align={"left"}
        color={"#230F37"}
      >
        <Text
          mb={"-45px"}
          fontSize={"30px"}
          letterSpacing={"-1px"}
          fontWeight={"600"}
        >
          Embrace relentless deteration, be an achiever.
        </Text>

        <Text
          mb={"-15px"}
          fontSize={"170px"}
          letterSpacing={"-6px"}
          fontWeight={"bold"}
        >
          <Highlight
            query="Goals."
            styles={{
              px: "30",
              py: "0",
              color: "#230F37",
              rounded: "50px",
              bg: "#FFE397",
            }}
          >
            Achieve Your Goals.
          </Highlight>
        </Text>

        <Text fontSize={"50px"} letterSpacing={"-3px"} fontWeight={"bold"}>
          <Highlight
            query="10X"
            styles={{
              px: "5",
              py: "0",
              color: "#230F37",
              rounded: "full",
              bg: "#C1FF72",
            }}
          >
            10X Productivity with
          </Highlight>
          <span> </span>
          <Highlight
            query="AI"
            styles={{
              px: "5",
              py: "0",
              color: "#230F37",
              rounded: "full",
              bg: "#8C52FF",
            }}
          >
            AI
          </Highlight>
        </Text>

        <Text w={"65%"} mt={"20px"} fontSize={"20px"} whiteSpace={"wrap"}>
          Supercharge your productivity and accomplish your objectives
          effortlessly with our cutting-edge AI-driven tools. Our advanced
          features are tailored to optimize your workflow, ensuring efficient
          task management and goal attainment
        </Text>
        

        <VStack align={"left"} justify={"left"} mt={"20px"}>
          <InputGroup
            w={"800px"}
            h={"60px"}
            size={"lg"}
            variant="filled"
            borderRadius={"20px"}
            bgColor={"#F5F5F5"}
          >
            <Input
              borderWidth={"0px"}
              h={"100%"}
              fontSize={"20px"}
              placeholder="I want to be a Frontend Devloper by 3 monthss"
            />
            <InputRightAddon bgColor={"teal"} h={"100%"}>
              <Button colorScheme="teal" w={"100%"}>
                <FaRunning size={"30px"} />
              </Button>
            </InputRightAddon>
          </InputGroup>
        </VStack>

        <HStack gap={"1%"} mt={"20px"}>
          <Button colorScheme="purple" variant="outline" p={"1.2%"}>
            Get Started
          </Button>{" "}
          <Button colorScheme="yellow" variant="outline" p={"1.2%"} w={"5%"}>
            {" "}
            Login
          </Button>
        </HStack>

        <Divider mt={"10%"} />
        <HStack justify={"center"}>
          <Text fontSize={"70px"} letterSpacing={"-3px"} fontWeight={"bold"}>
            Try Our Presets
          </Text>
        </HStack>

        <HStack
          mt={"70px"}
          justify={"center"}
          gap={"6%"}
          align={"start"}
          wrap={"wrap"}
        >
          <Card
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 150px 1px #76E4F7",
            }}
            textShadow={"0px 0px 10px black"}
            color={"white"}
            h={"325px"}
            w={"450px"}
            bgSize={"140%"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/turned-on-macbook-pro-wit-programg-codes-display-f77Bh3inUpE"
            }
          >
            <CardHeader fontSize={"35px"} fontWeight={"100"} zIndex={"2"}>
              Frontend Developer developer
              <Divider borderWidth={"1px"} />
            </CardHeader>
            <CardBody>
              <VStack fontWeight={"600"} align={"left"} mt={"-30px"}>
                <Text>Length: 3 months</Text>
                <Text>Difficutly: Normal</Text>
                <Text>Customizable</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <HStack justify={"center"} mt={"-10px"}>
                <Button
                  colorScheme="cyan"
                  variant="outline"
                  rightIcon={<FaArrowRight />}
                >
                  Try
                </Button>
              </HStack>
            </CardFooter>
          </Card>

          <Card
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 150px 1px #F6E05E",
            }}
            textShadow={"0px 0px 10px black"}
            color={"white"}
            h={"325px"}
            w={"450px"}
            bgSize={"150%"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/man-in-green-t-shirt-running-with-182-numbered-shirt-_rdqPj1udaQ"
            }
          >
            <CardHeader fontSize={"35px"} fontWeight={"100"}>
              Run 10km Non stop For 1 Hour
              <Divider borderWidth={"1px"} />
            </CardHeader>
            <CardBody>
              <VStack fontWeight={"600"} align={"left"} mt={"-30px"}>
                <Text>Length: 1 months</Text>
                <Text>Difficutly: hard</Text>
                <Text>Customizable</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <HStack justify={"center"} mt={"-10px"}>
                <Button
                  colorScheme="yellow"
                  variant="outline"
                  rightIcon={<FaArrowRight />}
                >
                  Try
                </Button>
              </HStack>
            </CardFooter>
          </Card>

          <Card
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0 0 150px 1px #68D391",
            }}
            textShadow={"0px 0px 10px black"}
            color={"white"}
            h={"325px"}
            w={"450px"}
            bgSize={"150%"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgImage={
              "https://source.unsplash.com/person-using-laptop-vZJdYl5JVXY"
            }
          >
            <CardHeader fontSize={"35px"} fontWeight={"100"}>
              Start a side business/income
              <Divider borderWidth={"1px"} />
            </CardHeader>
            <CardBody>
              <VStack fontWeight={"600"} align={"left"} mt={"-30px"}>
                <Text>Length: 2-3 months</Text>
                <Text>Difficutly: hard</Text>
                <Text>Customizable</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <HStack justify={"center"} mt={"-10px"}>
                <Button
                  colorScheme="green"
                  variant="outline"
                  rightIcon={<FaArrowRight />}
                >
                  Try
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        </HStack>

        <Text
          mt={"200px"}
          fontSize={"100px"}
          letterSpacing={"-6px"}
          fontWeight={"bold"}
        >
          <Highlight
            query="Goals"
            styles={{
              px: "30",
              py: "0",
              color: "#230F37",
              rounded: "50px",
              bg: "#FFE397",
            }}
          >
            Set your Goals right.
          </Highlight>
        </Text>

        <Text w={"65%"} mt={"20px"} fontSize={"20px"} whiteSpace={"wrap"}>
          Setting your goals is the cornerstone of success. It's not just about
          envisioning your aspirations; it's about defining them clearly and
          with purpose. When you set your goals right, you provide yourself with
          a roadmap, a direction that guides your actions and decisions.
        </Text>

        <VStack align={"left"} mt={"3.5%"}  >
          <HStack gap={"5%"}  mb={"2.5%"} >
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Goal Setting
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    define, and manage their goals effectively.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Tracking Tools
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    Track progress and growth, for the best results
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Productivity
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    AI-powered features aimed at boosting productivity.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </HStack>

          <HStack gap={"5%"}>
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Coaching
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    AI focused coaching and plans to set you on track
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Customizable
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    Tailor services to meet the needs of businesses
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            <Card
              borderRadius={"10px"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 150px 1px #E7CFFF",
              }}
              color={"black"}
              w={"350px"}
              h={"225px"}
              bgSize={"150%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"#E7CFFF"}
            >
              <CardHeader fontSize={"35px"} fontWeight={"500"}>
                Analytics
              </CardHeader>
              <CardBody>
                <VStack
                  fontWeight={"350"}
                  fontSize={"20px"}
                  align={"left"}
                  mt={"-30px"}
                >
                  <Text p={"0 0% 0 2%"}>
                    {" "}
                    Track data to make informed user decisions
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </VStack>

        <Text
          mt={"300px"}
          fontSize={"100px"}
          letterSpacing={"-6px"}
          fontWeight={"bold"}
        >
          <Highlight
            query="Rocket"
            styles={{
              px: "30",
              py: "0",
              color: "#230F37",
              rounded: "50px",
              bg: "purple.200",
            }}
          >
            Sky Rocket Growth.
          </Highlight>
        </Text>
        <Text w={"65%"} mt={"20px"} fontSize={"20px"} whiteSpace={"wrap"}>
          We stand out by prioritizing the creation of realistic goals, a facet
          often overlooked by other productivity apps. Our platform focuses on
          crafting personalized SMART goals tailored to individual needs,
          ensuring they are achievable and practical.
          <br /> <br /> Unlike generic apps, we offer comprehensive tools,
          guidance, and a supportive community, empowering users to set and
          achieve their goals effectively.
        </Text>

        <HStack gap={"1%"} mt={"20px"}>
          <Button colorScheme="purple" variant="outline" p={"1.2%"}>
            Get Started
          </Button>{" "}
          <Button colorScheme="yellow" variant="outline" p={"1.2%"} w={"5%"}>
            {" "}
            Login
          </Button>
        </HStack>

        <Divider mt={"2%"} borderColor={"black"} />

        <HStack justify={"center"}>
          <Card
            boxShadow={"none"}
            borderRadius={"10px"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            color={"black"}
            w={"700px"}
            h={"600px"}
            bgSize={"150%"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgColor={"none"}
          >
            <CardHeader fontSize={"55px"} fontWeight={"500"}>
              Without
            </CardHeader>
            <CardBody
              bgImage={failB}
              bgSize={"60%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"none"}
              bgPosition={"left bottom"}
            >
              <VStack
                fontWeight={"350"}
                fontSize={"20px"}
                align={"left"}
                mt={"-30px"}
              >
                <Text p={"0 0% 0 2%"}> </Text>
              </VStack>
              <Text p={"0 0% 0 2%"} fontWeight={"300"} fontSize={"20px"} text>
                <ul>
                  <li>Distraction</li>
                  <li>Clouded</li>
                  <li>Unneeded Complication</li>
                  <li>Slow</li>
                </ul>
              </Text>
            </CardBody>
          </Card>
      

          <Card
            boxShadow={"none"}
            borderRadius={"10px"}
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            color={"black"}
            w={"700px"}
            h={"600px"}
            bgSize={"200%"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgColor={"none"}
          >
            <CardHeader fontSize={"55px"} fontWeight={"500"}>
              With
            </CardHeader>
            <CardBody

              bgImage={AB}
              bgSize={"80%"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              bgColor={"none"}
            bgPos={"left"}
            >
              <VStack
                fontWeight={"350"}
                fontSize={"20px"}
                align={"left"}
                mt={"-30px"}
              >
                <Text p={"0 0% 0 2%"}> </Text>
              </VStack>
              <Text p={"0 0% 0 2%"} fontSize={"20px"} fontWeight={"300"}>
                <ul>
                  <li>Direct</li>
                  <li>Efficient within means</li>
                  <li>Practical and realistic </li>
                  <li>Speedy Progress </li>
                </ul>
              </Text>
            </CardBody>
          </Card>
        </HStack>

        <Text
          mt={"300px"}
          fontSize={"100px"}
          letterSpacing={"-6px"}
          fontWeight={"bold"}
        >
          <Highlight
            query="Your"
            styles={{
              px: "30",
              py: "0",
              color: "#230F37",
              rounded: "50px",
              bg: "green.200",
            }}
          >
            Your Goals Matter.
          </Highlight>
        </Text>
        <Text w={"65%"} mt={"20px"} fontSize={"20px"} whiteSpace={"wrap"}>
          We stand out by prioritizing the creation of realistic goals, a facet
          often overlooked by other productivity apps. Our platform focuses on
          crafting personalized SMART goals tailored to individual needs,
          ensuring they are achievable and practical.
          <br /> <br />
          Unlike generic apps, we offer comprehensive tools, guidance, and a
          supportive community, empowering users to set and achieve their goals
          effectively.
        </Text>

        <HStack justify={"center"}>
          <Box mt={"5%"}  ml={"-50px"} >
            <Image src={Drawing} />
          </Box>
        </HStack>

        <Text

        align={"center"}
         mt={"200px"}
          fontSize={"30px"}
          letterSpacing={"-1px"}
          fontWeight={"600"}
        >
          Embrace relentless deteration, be an achiever.
        </Text>

        <Text align={"center"}
          mb={"-15px"}
          fontSize={"170px"}
          letterSpacing={"-6px"}
          fontWeight={"bold"}
        >
          <Highlight
            query="Now."
            styles={{
              px: "30",
              py: "0",
              color: "#230F37",
              rounded: "50px",
              bg: "#FFE397",
            }}
          >
            Get Started Now.
          </Highlight>
        </Text>

        <Text align={"center"} fontSize={"50px"} letterSpacing={"-3px"} fontWeight={"bold"} >
          <Highlight
            query="1 Month free Trail"
            styles={{
              px: "5",
              py: "0",
              color: "#230F37",
              rounded: "full",
              bg: "#C1FF72",
            }}
          >
           1 Month free Trail
          </Highlight>
          
        
        </Text>
        <HStack justify={"center"}>
        <Text w={"55%"} mt={"20px"} fontSize={"20px"} whiteSpace={"wrap"} >
        Taking advantage of our one-month free trial is a fantastic opportunity to experience the full spectrum of benefits our AI-driven tools offer. Here's a breakdown of how you can get started and maximize your productivity during this trial period
        </Text>
     

        </HStack>

      

        <VStack align={"center"}  mt={"60px"} >
          <InputGroup
            w={"800px"}
            h={"60px"}
            size={"lg"}
            variant="filled"
            borderRadius={"20px"}
            bgColor={"#F5F5F5"}
          >
            <Input
              borderWidth={"0px"}
              h={"100%"}
              fontSize={"20px"}
              placeholder="I want to be a Frontend Devloper by 3 monthss"
            />
            <InputRightAddon bgColor={"teal"} h={"100%"}>
              <Button colorScheme="teal" w={"100%"}>
                <FaRunning size={"30px"} />
              </Button>
            </InputRightAddon>
          </InputGroup>
        </VStack>

        <HStack gap={"1%"} justify={"center"} mt={"20px"}>
          <Button colorScheme="purple" variant="outline" p={"1.2%"}>
            Get Started
          </Button>{" "}
          <Button colorScheme="yellow" variant="outline" p={"1.2%"} w={"5%"}>
            {" "}
            Login
          </Button>
        </HStack>
        <HStack mt={"200px"} justify={"center"} mb={"20px"}>
\

        </HStack>

     
       

      </VStack>
    </>
  );
}
