import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

export type InputFieldProps = {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type?: string;
  errors?: string[];
};

export const InputField = ({
  label,
  name,
  type = 'text',
  onChange,
  value,
  errors,
}: InputFieldProps) => (
  <FormControl id={name} isRequired isInvalid={errors && errors?.length > 0}>
    <FormLabel>{label}</FormLabel>
    <Input name={name} onChange={onChange} value={value} type={type} />
    {errors &&
      errors.length > 0 &&
      errors.map((error) => (
        <FormErrorMessage key={error}>{error}</FormErrorMessage>
      ))}
  </FormControl>
);
