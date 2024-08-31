import {
  Box,
  Checkbox,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Head, Link as InertiaLink } from '@inertiajs/react';
import Form from '~/components/form/form';
import FormErrors from '~/components/form/form_errors';
import { InputField } from '~/components/form/input_field';
import InputPasswordField from '~/components/form/input_password_field';
import SubmitButton from '~/components/form/submit_button';

const initialData = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginPage = () => (
  <Form<typeof initialData>
    initialData={initialData}
    method="POST"
    targetUrl="/auth/login"
  >
    {({ data, onChange, processing, fieldErrors, formErrors }) => (
      <>
        <Head title="Login" />
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        {formErrors.length > 0 && <FormErrors errors={formErrors} />}
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <InputField
              label="Email address"
              name="email"
              onChange={onChange}
              value={data.email}
              errors={fieldErrors.email}
            />
            <InputPasswordField
              label="Password"
              name="password"
              onChange={onChange}
              value={data.password}
              errors={fieldErrors.password}
            />
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Checkbox
                  name="rememberMe"
                  onChange={onChange}
                  checked={data.rememberMe}
                >
                  Remember me
                </Checkbox>
                <Link
                  as={InertiaLink}
                  href="/auth/forgot-password"
                  color="blue.400"
                >
                  Forgot password?
                </Link>
              </Stack>
              <SubmitButton
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={processing}
              >
                Sign in
              </SubmitButton>
            </Stack>
            <Stack pt={6}>
              <Text align="center">
                Need an account?{' '}
                <Link as={InertiaLink} href="/auth/signin" color="blue.400">
                  Signin
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </>
    )}
  </Form>
);

export default LoginPage;
