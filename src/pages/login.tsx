import * as z from 'zod';
import {
  Icon,
  Text,
  Input,
  Center,
  Button,
  chakra,
  Heading,
  useToast,
  FormControl,
  FormErrorMessage
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
  const toast = useToast();
  const { value, start: startCountDown, started } = useCountDown(5);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<{ email: string }>({ resolver: zodResolver(schema) });

  const onSubmit = async ({ email }: { email: string }) => {
    try {
      const { error } = await supabase.auth.signIn(
        { email },
        { redirectTo: `${clientUrl}/redirect` }
      );
      if (error) throw error;
      toast({
        title: 'Link sent',
        description: 'Please check your inbox',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true
      });
    } catch (error) {
      console.warn(error);
      toast({
        title: 'Failed to send link',
        description: 'Please try again later',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true
      });
    } finally {
      startCountDown();
    }
  };

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
            isFullWidth
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Sending link..."
            rightIcon={<Icon as={MdEmail} />}
            disabled={started || isSubmitting}
          >
            {started ? `Resend After ${value}s` : 'Get Login Link'}
          </Button>
        </chakra.form>
      </Center>
    </>
  );
};

export default Login;
