'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Signinbutton = () => {
  // session is to check if the user is authenticated
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className='flex gap-4 ml-auto mr-12 items-center'>
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className='border-2 border-white py-2 px-4'
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className='border-2 border-white py-2 px-4'
    >
      Sign In
    </button>
  );
};

export default Signinbutton;
