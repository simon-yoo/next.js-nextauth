import React from 'react';
import Link from 'next/link';
import Signinbutton from './Signinbutton';
const AppBar = () => {
  return (
    <>
      <div className='flex mt-12'>
        <h1 className='ml-12 font-bold text-4xl underline uppercase'>
          nextauth prisma
        </h1>
        <Link
          className='text-2xl flex items-center ml-10 cursor-pointer hover:scale-110 hover:border-2 hover:border-white px-2 py-2 transition ease-in-out duration-150'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='text-2xl flex items-center ml-10 mr-4 text-center  cursor-pointer hover:scale-110 hover:border-2 hover:border-white p-2 transition ease-in-out duration-150'
          href={'/UserPost'}
        >
          User Post Page
        </Link>
        <Signinbutton />
      </div>
    </>
  );
};

export default AppBar;
