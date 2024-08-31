import {
  Box,
  Heading,
  HStack,
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
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SigninPage = () => (
  <Form<typeof initialData>
    initialData={initialData}
    method="POST"
    targetUrl="/auth/signin"
  >
    {({ data, onChange, processing, fieldErrors, formErrors }) => (
      <>
        <Head title="Signin" />
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        {formErrors.length > 0 && <FormErrors errors={formErrors} />}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <InputField
                  name="firstname"
                  label="Firstname"
                  onChange={onChange}
                  value={data.firstname}
                  errors={fieldErrors.firstname}
                />
              </Box>
              <Box>
                <InputField
                  name="lastname"
                  label="Lastname"
                  onChange={onChange}
                  value={data.lastname}
                  errors={fieldErrors.lastname}
                />
              </Box>
            </HStack>
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
            <InputPasswordField
              label="Password confirmation"
              name="password_confirmation"
              onChange={onChange}
              value={data.password_confirmation}
              errors={fieldErrors.password_confirmation}
            />
            <Stack spacing={10} pt={2}>
              <SubmitButton loadingText="Submitting" isLoading={processing}>
                Sign up
              </SubmitButton>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link as={InertiaLink} href="/auth/login" color={'blue.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </>
    )}
  </Form>
);

export default SigninPage;
