import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container, Heading, Input, Button, VStack, Text, Box } from "@chakra-ui/react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container
      maxW={{ base: "96%", md: "80%" }}
      mt={6}
      p={6}
      centerContent
    >
      <Box p={6} bg="white" borderRadius="md" boxShadow="md" w="100%">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Sign In
        </Heading>
        <form onSubmit={handleSignIn}>
          <VStack spacing={4}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              bg="gray.100"
              borderRadius="md"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              bg="gray.100"
              borderRadius="md"
            />
            <Button type="submit" colorScheme="teal" width="full">
              Sign In
            </Button>
            {error && <Text color="red.500">{error}</Text>}
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default SignInPage;
