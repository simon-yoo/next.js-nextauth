import Signinbutton from './components/Signinbutton';
export default function Home() {
  return (
    <div className='flex mt-12'>
      <h1 className='ml-12 font-bold text-4xl underline uppercase'>
        nextauth prisma
      </h1>
      <Signinbutton />
    </div>
  );
}
