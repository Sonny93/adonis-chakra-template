import {
  ChakraBaseProvider,
  theme as chakraTheme,
  extendBaseTheme,
} from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const BaseLayout = ({ children }: PropsWithChildren) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);

export default BaseLayout;
