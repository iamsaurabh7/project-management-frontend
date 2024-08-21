import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token"); // Remove token from localStorage
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const token = localStorage.getItem("token");

  return (
    <Box
      bg="blackAlpha.700" // Primary background color
      w={{ base: "96%", md: "80%" }} // 96% width on mobile, 80% on desktop
      mx="auto" // Horizontally center the navbar
      py={4} // Padding on top and bottom
      px={6} // Padding on sides
      borderRadius="md" // Slightly round edges
      mt={4} // Add margin on top
    >
      <Flex
        justify="space-between" // Space between logo and links
        align="center" // Align vertically in center
      >
        {/* Logo Section */}
        <Link to="/">
          <Text
            fontSize={{ base: "lg", md: "2xl" }} // Responsive font size
            color="white" // Text color white
            fontWeight="bold"
          >
            Project Manager
          </Text>
        </Link>

        {/* Navigation Links */}
        <Flex gap={4} align="center">
          {!token ? (
            <>
              <Link to="/signin">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  _hover={{ color: "blackAlpha.400" }} // Hover effect
                >
                  Sign In
                </Text>
              </Link>
              <Link to="/signup">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  _hover={{ color: "blackAlpha.400" }} // Hover effect
                >
                  Sign Up
                </Text>
              </Link>
            </>
          ) : (
            <>
              <Link to="/projects">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  _hover={{ color: "blackAlpha.400" }} // Hover effect
                >
                  Projects
                </Text>
              </Link>
              <Button
                onClick={handleLogout}
                variant="ghost"
                color="white"
                _hover={{ bg: "blackAlpha.500" }}
              >
                Logout
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
