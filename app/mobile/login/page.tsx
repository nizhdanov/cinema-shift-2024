'use client';

import { createOtp } from '@/auth';
import { useCountdown } from '@/hooks';
import { OtpResponse } from '@/types';
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from '@/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  phone: z.string().min(1, 'Поле является обязательным'),
  code: z.string()
});

const LoginPage = () => {
  const [isLoginig, setIsLoginig] = useState(false);

  const { isRunning, seconds } = useCountdown(12000);

  let otp: OtpResponse;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: '',
      code: ''
    }
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (isLoginig) {
      signIn('credentials', data);
    }
    otp = await createOtp(data);
    if (otp.success) {
      setIsLoginig(true);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
          <p className='text-base font-normal leading-normal text-gray-900'>
            {isLoginig
              ? 'Введите проверочный код для входа в личный кабинет'
              : 'Введите номер телефона для входа в личный кабинет'}
          </p>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Телефон' type='number' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {isLoginig && (
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Проверочный код' type='number' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button className='w-full' type='submit'>
            Продолжить
          </Button>
        </form>
      </Form>

      {isRunning && (
        <>
          <p className='flex flex-col gap-2 text-sm font-normal leading-tight text-gray-400'>
            Запросить код повторно можно через
          </p>
          <p className='text-sm font-normal leading-tight text-gray-700'>{seconds} секунд</p>
        </>
      )}

      {!isRunning && (
        <Button variant={'ghost'} className='text-base font-semibold leading-normal text-gray-700'>
          Запросить код ещё раз
        </Button>
      )}
    </main>
  );
};

export default LoginPage;
