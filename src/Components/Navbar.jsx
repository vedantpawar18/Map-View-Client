import { Box, Flex, HStack, Button, Avatar, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <Box bg={"teal.400"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box width={"20%"} onClick={() => navigate("/")}>
              <img
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/a9b49e7e262d0f45e791"
                alt=""
              />
            </Box>
            {token && (
              <Button
                variant="ghost"
                color={"white"}
                size={"sm"}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
            )}
          </HStack>
          <Flex alignItems={"center"}>
            {userName && (
              <HStack spacing={4} mr={4}>
                <Avatar name={userName} size={"sm"} />
                <Text fontSize="sm" fontWeight="medium">
                  {userName}
                </Text>
              </HStack>
            )}
            {token ? (
              <Button
                bg={"white"}
                color={"black"}
                size={"sm"}
                onClick={handleLogout}
                mr={4}
              >
                Logout
              </Button>
            ) : (
              <Button
                bg={"white"}
                color={"black"}
                size={"sm"}
                onClick={() => navigate("/signup")}
                mr={4}
              >
                SignUp
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
