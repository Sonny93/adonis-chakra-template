import { Box, useColorModeValue } from '@chakra-ui/react';

const FormErrors = ({ errors }: { errors: string[] }) =>
  errors.map((error) => (
    <Box
      border="1px"
      borderColor="red.400"
      key={error}
      rounded="md"
      bg={useColorModeValue('red.100', 'red.100')}
      textAlign="center"
      boxShadow="lg"
      p={[1, 2]}
    >
      {error}
    </Box>
  ));

export default FormErrors;
