import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { InputFieldProps } from '~/components/form/input_field';

export default function InputPasswordField({
  label,
  name,
  onChange,
  value,
  errors,
}: Omit<InputFieldProps, 'type'>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <FormControl id={name} isRequired isInvalid={errors && errors?.length > 0}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          name={name}
          onChange={onChange}
          value={value}
          type={showPassword ? 'text' : 'password'}
        />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() => setShowPassword((_showPassword) => !_showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {errors &&
        errors.length > 0 &&
        errors.map((error) => (
          <FormErrorMessage key={error}>{error}</FormErrorMessage>
        ))}
    </FormControl>
  );
}
