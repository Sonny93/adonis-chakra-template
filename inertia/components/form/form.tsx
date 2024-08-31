import { SharedProps } from '@adonisjs/inertia/types';
import { Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import { useForm, usePage } from '@inertiajs/react';
import { ChangeEvent, FormEvent, ReactNode } from 'react';

type OnChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
type ChildrenFunction<T> = ({
  data,
  onChange,
  processing,
  fieldErrors,
}: {
  data: T;
  onChange: OnChangeType;
  processing: boolean;
  fieldErrors: any;
  formErrors: string[];
}) => ReactNode;

type FormProps<T> = {
  initialData: object;
  children: ChildrenFunction<T>;
  targetUrl: string;
  method?: string;
};

export default function Form<T>({
  targetUrl,
  method = 'post',
  initialData,
  children,
}: FormProps<T>) {
  const { data, setData, submit, processing, errors } = useForm(initialData);
  const { errors: inertiaErrors } = usePage<SharedProps>().props;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    submit(
      method.toLowerCase() as any /* cannot access to Method type */,
      targetUrl,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
  const handleChangeInput: OnChangeType = ({ target }) =>
    setData(target.name as never, target.value as never);

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          {children({
            data: data as T,
            onChange: handleChangeInput,
            processing,
            fieldErrors: errors,
            formErrors: inertiaErrors ?? [],
          })}
        </Stack>
      </Flex>
    </form>
  );
}
