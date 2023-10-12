'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Signinbutton = () => {
  // session is to check if the user is authenticated
  const { data: session } = useSession();

  // if user is authenticated
  if (session && session.user) {
    return (
      <div className='flex gap-4 ml-auto mr-12 items-center'>
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className='border-2 text-red-600 border-white py-2 px-4 cursor:pointer hover:rotate-6 hover:scale-110'
        >
          Sign Out
        </button>
      </div>
    );
  }

  // when not logged in
  return (
    <div className='flex gap-4 ml-auto mr-12 items-center'>
      <button
        onClick={() => signIn()}
        className='border-2 border-white py-2 px-4 cursor:pointer hover:rotate-6 hover:scale-110'
      >
        Sign In
      </button>
    </div>
  );
};

export default Signinbutton;
