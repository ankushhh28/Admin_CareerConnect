import React from 'react';
import Image from 'next/image';
import LoginForm from './component/loginForm';

const LoginPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-sm space-y-6 bg-white rounded-2xl shadow-lg p-8'>
        <div className='text-center'>
          <Image
            src='/LogoBlack.png'
            alt='Career Connect'
            width={225}
            height={1}
            className='mx-auto'
          />
        </div>

        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
