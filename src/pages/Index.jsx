import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="white" minH="100vh">
      <Box as="header" bg="gray.50" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Image src="/logo.png" alt="Logo" boxSize="40px" />
            <HStack spacing={8}>
              <Link href="#" fontSize="md" fontWeight="medium" color="gray.700">Home</Link>
              <Link href="#" fontSize="md" fontWeight="medium" color="gray.700">Solutions</Link>
              <Link href="#" fontSize="md" fontWeight="medium" color="gray.700">Case Studies</Link>
              <Link href="#" fontSize="md" fontWeight="medium" color="gray.700">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={6} align="start">
          <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
            Enabling visionaries to achieve moonshot ambitions.
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="xl">
            Imaginary Space is the secure, enterprise AI Automation company purpose-built for elite financial institutions & Startups — helping you save time, slash costs, and automate workflows.
          </Text>
          <Button colorScheme="orange" size="lg" mt={4}>
            Get Started →
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;