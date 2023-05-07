import { Box, Flex, Heading, Image, ListItem, Stack,   UnorderedList } from "@chakra-ui/react";

function HomePage() {
  return (
    <Stack direction={{ base: "column", lg: "row" }} h="100vh" spacing={0}>
      <Box w={{ base: "100%", lg: "50%" }} h={{ base: "50vh", lg: "100vh" }} pos="relative">
        <Image src="https://wallpaperaccess.com/full/5992449.jpg" alt="Map view app" objectFit="cover" w="100%" h="100%" />
      </Box>
      <Flex w={{ base: "100%", lg: "50%" }} h="100%" p={{ base: 6, lg: 8 }} align="center">
        <Box w="100%">
          <Heading as="h1" fontSize={{ base: "3xl", lg: "4xl" }} fontWeight="bold" mb={{ base: 4, lg: 8 }}>
            Map View App
          </Heading>
          <UnorderedList listStyleType="disc" spacing={2} mt={0}>
            <ListItem>Find any location on the map</ListItem>
            <ListItem>Zoom in and Zoom out the location</ListItem>
            <ListItem>Compare your current location and your destination</ListItem>
            <ListItem>Explore new cities and countries</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Stack>
  );
}

export default HomePage;
