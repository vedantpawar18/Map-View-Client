import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Card = ({ city, state, population, imageUrl, latitude, longitude, cityDescription }) => {
  const imageSize = useBreakpointValue({ base: "100%", sm: "200px", md: "250px", lg: "300px" });
  const textAlignment = useBreakpointValue({ base: "center", sm: "left", md: "center", lg: "left" });

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      <Image src={imageUrl} alt={`Image of ${city}`} w={imageSize} />

      <Box p="6">
        <Box d="flex" alignItems="baseline" justifyContent={textAlignment}>
          <Text fontSize="2xl" fontWeight="semibold" mr="2">
            {city}
          </Text>
          <Text fontSize="lg" color="gray.500">
            {state}
          </Text>
        </Box>

        <Flex alignItems="center" mt="2" mb="4">
          
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
