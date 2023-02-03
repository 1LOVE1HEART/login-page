import Link from 'next/link';
import { Router, useRouter } from 'next/router';

export default function FirstPost() {

  const router = useRouter();
  return (
    <>
      <h1>First Page</h1>
      <button onClick={()=>router.push('./login')} className="justify-right text-xs border rounded-md bg-sky-600 text-white p-1 hover:bg-lime-600">Back to Login</button>
    </>
  );
}