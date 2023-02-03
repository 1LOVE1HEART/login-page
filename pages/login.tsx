import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  
  return (
    <>
    <div className="flex justify-center p-10">
      <form>
      <div>
        <h1 className="text-center italic text-sky-600">歡迎登入</h1>
      </div>
      
      <div className="pb-2">
        <label className="text-sm">帳號&nbsp; </label>
        <input type="text" placeholder="Account" className="border border-sky-500 rounded-md placeholder:text-ms placeholder:text-center" ></input>
      </div>
      <div className="pb-2">
        <label className="text-sm">密碼&nbsp; </label>
        <input placeholder="Password" className="border border-sky-500 rounded-md placeholder:text-ms placeholder:text-center" ></input>
      </div>
      <div className="flex justify-center">
        <button type="button" onClick={()=>router.push('./first-page')} className="justify-right text-xs border rounded-md bg-sky-600 text-white p-1 hover:bg-lime-600">Login</button>
      </div>
    </form>
</div>
        </>
    
    
  )
}

export default Login