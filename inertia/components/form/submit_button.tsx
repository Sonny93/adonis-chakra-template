import { Button, ButtonProps } from '@chakra-ui/react';

const SubmitButton = (props: ButtonProps) => (
  <Button
    {...props}
    type="submit"
    size="lg"
    bg={'blue.400'}
    color={'white'}
    _hover={{
      bg: 'blue.500',
    }}
  >
    {props.children}
  </Button>
);

export default SubmitButton;
