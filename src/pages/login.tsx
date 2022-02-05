import * as z from 'zod';
import {
  Icon,
  Input,
  Center,
  Button,
  chakra,
  Heading,
  useToast,
  FormControl,
  FormErrorMessage,
  Text
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCountDown } from '../hooks';
import { supabase } from '../supabase';
import { clientUrl } from '../constants';
import Logo from '../../public/logo.png';
import type { PageWithLayout } from '../types';

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: 'This field is required' })
    .email({ message: 'Please enter a valid email' })
});

const Login: PageWithLayout = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful }
  } = useForm<{ email: string }>({ resolver: zodResolver(schema) });

  const { value, start } = useCountDown(5);

  const onSubmit = async ({ email }: { email: string }) => {
    try {
      const { error } = await supabase.auth.signIn(
        { email },
        { redirectTo: `${clientUrl}/app` }
      );
      if (error) throw error;
    } catch (error) {
      console.warn(error);
    }
  };

  console.log('rendered');

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center w="full" flex={1} p="12">
        <chakra.form
          w="full"
          maxW="96"
          display="flex"
          alignItems="center"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
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
            disabled={true}
            isFullWidth
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Sending link..."
            rightIcon={<Icon as={MdEmail} />}
          >
            Get Login Link
          </Button>
          <Button mt={4} isFullWidth colorScheme="blue" onClick={() => start()}>
            Start Timer
          </Button>
          <Text> {value} </Text>
        </chakra.form>
      </Center>
    </>
  );
};

Login.withFooter = true;

export default Login;
