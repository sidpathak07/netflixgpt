import Header from "./Header";
import {useState} from "react";
const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);
    return(
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: "url('/netflix-movies-bg.jpg')" }}
        >
            <Header />
            <div className="flex-1 flex items-center justify-center px-4 py-8">
                <form className="w-1/3 rounded-lg bg-black bg-opacity-70 flex flex-col gap-6 py-12 px-4 rounded-lg">
                    <h3 className="text-white font-bold text-2xl py-2 w-2/3 mx-auto">{isSignIn?"Sign In":"Sign Up"}</h3>
                    <input className={`w-2/3 mx-auto px-3 py-2 rounded bg-gray-200 ${isSignIn ? 'hidden' : 'visible'}`} placeholder="Name" type="text" />
                    <input className="w-2/3 mx-auto px-3 py-2 rounded bg-gray-200" placeholder="Email" type="email" />
                    <input className="w-2/3 mx-auto px-3 py-2 rounded bg-gray-200" placeholder="Password" type="password" />
                    <button className="w-2/3 mx-auto px-3 py-2 bg-red-600 text-white rounded font-semibold" type="submit">{isSignIn?"Sign In":"Sign Up"}</button>
                    <p className={`py-2 w-2/3 mx-auto text-gray-400 ${isSignIn ? 'visible' : 'hidden'}`}>Dont have account?<span className="text-gray-200 font-bold text-l hover:cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>Sign Up</span></p>
                    <p className={`py-2 w-2/3 mx-auto text-gray-400 ${isSignIn ? 'hidden' : 'visible'}`}>Already have account?<span className="text-gray-200 font-bold text-l hover:cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>Sign In</span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;

