import * as z from 'zod';
import {
  Icon,
  Input,
  Center,
  Button,
  chakra,
  Heading,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Logo from '../public/logo.png';

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: 'This field is required' })
    .email({ message: 'Please enter a valid email' })
});

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<{ email: string }>({ resolver: zodResolver(schema) });

  return (
    <>
      <Center w="full" flex={1}>
        <chakra.form
          w="full"
          maxW="96"
          display="flex"
          alignItems="center"
          flexDirection="column"
          onSubmit={handleSubmit((val) => console.log('email', val.email))}
        >
          <Image src={Logo} alt="logo" width={90} height={90} />
          <Heading fontSize="xl" mt="6">
            Log in to Pastebook
          </Heading>
          <FormControl isInvalid={!!errors.email}>
            <Input
              mt="6"
              id="email"
              placeholder="Please enter your email address..."
              {...register('email')}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            isFullWidth
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            rightIcon={<Icon as={MdEmail} />}
          >
            Get Login Link
          </Button>
        </chakra.form>
      </Center>
    </>
  );
}

export default Login;
