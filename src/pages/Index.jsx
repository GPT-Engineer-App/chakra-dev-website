import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="#f8f9fa" minH="100vh">
      <Box as="header" bg="#ffffff" py="16px 0" borderBottom="1px" borderColor="#e0e0e0">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Image src="/logo.png" alt="Logo" boxSize="40px" />
            <HStack spacing={8}>
              <Link href="#" fontSize="16px" fontFamily="Arial, sans-serif" color="#333333">Home</Link>
              <Link href="#" fontSize="16px" fontFamily="Arial, sans-serif" color="#333333">Solutions</Link>
              <Link href="#" fontSize="16px" fontFamily="Arial, sans-serif" color="#333333">Case Studies</Link>
              <Link href="#" fontSize="16px" fontFamily="Arial, sans-serif" color="#333333">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={6} align="start">
          <Heading as="h1" size="2xl" fontSize="48px" fontFamily="Georgia, serif" color="#212529">
            Enabling visionaries to achieve moonshot ambitions.
          </Heading>
          <Text fontSize="18px" fontFamily="Arial, sans-serif" color="#495057" maxW="600px">
            Imaginary Space is the secure, enterprise AI Automation company purpose-built for elite financial institutions & Startups — helping you save time, slash costs, and automate workflows.
          </Text>
          <Button colorScheme="blue" size="md" mt="24px">
            Get Started →
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;