import { Alert } from '@chakra-ui/react';

const FormErrors = ({ errors }: { errors: string[] }) =>
  errors.map((error) => (
    <Alert key={error} status="error">
      {error}
    </Alert>
  ));

export default FormErrors;
