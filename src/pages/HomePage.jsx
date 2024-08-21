import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box
      w={{ base: "95%", md: "80%" }} // Responsive width: 95% for mobile, 80% for desktop
      mx="auto" // Center the content horizontally
      minH="100vh" // Take full viewport height
      display="flex" // Flexbox to center content
      alignItems="center" // Vertically center
      justifyContent="center" // Horizontally center
      bg="blackAlpha.200" // Secondary color background
    >
      <VStack spacing={6} textAlign="center">
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }} // Font size responsive for mobile and desktop
          color="blackAlpha.700" // Primary color
        >
          Welcome to Project Management App
        </Heading>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="blackAlpha.700" // Primary color
        >
          Manage your projects efficiently with our tools.
        </Text>
      </VStack>
    </Box>
  );
}

export default HomePage;
