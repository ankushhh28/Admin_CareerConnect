import React from 'react';
import Image from 'next/image';
import LoginForm from './component/loginForm';

const LoginPage = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-sm space-y-6 bg-white rounded-2xl shadow-lg p-8'>
        <div className='text-center'>
          <Image
            src='/c2-high-resolution-logo.png'
            alt='Career Connect Logo'
            width={120}
            height={120}
            className='mx-auto'
            priority
          />
        </div>

        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
