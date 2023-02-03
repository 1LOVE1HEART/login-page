import { Router, useRouter } from 'next/router';

export default function FirstPost() {

  const router = useRouter();
  return (
    <>
      <h1 className='text-center text-sky-600 p-8'>First Page</h1>
      <div className='flex justify-center'>
        <button onClick={()=>router.push('./login')} className="text-xs border rounded-md bg-sky-600 text-white p-1 hover:bg-lime-600 flex ">Back to Login
        </button>
      </div>
      
    </>
  );
}