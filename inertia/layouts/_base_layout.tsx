import {
  ChakraBaseProvider,
  theme as chakraTheme,
  extendBaseTheme,
} from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

const {
  Alert,
  Button,
  Input,
  Checkbox,
  Heading,
  Container,
  Form,
  FormLabel,
  FormError,
} = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Alert,
    Button,
    Input,
    Checkbox,
    Heading,
    Container,
    Form,
    FormLabel,
    FormError,
  },
});

const BaseLayout = ({ children }: PropsWithChildren) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);

export default BaseLayout;
