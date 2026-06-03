import Header from "./Header";
import {useRef, useState} from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
import {onAuthStateChanged,updateProfile} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [firebaseError, setFirebaseError] = useState("");


    const isValidEmail = (email)=>{
        let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if(!isEmailValid) return "Invalid email";
        return true;
    }
    const isValidPassword = (password) =>{
        let isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/.test(password)
        if(!isPasswordValid) return "Enter valid password";
        return true;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmailError("");
        setPasswordError("");
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        console.log("Email:", emailValue);
        console.log("Password:", passwordValue);
        const checkEmailValidity = isValidEmail(emailValue);
        const checkPasswordValidity = isValidPassword(passwordValue);
        
        setEmailError(checkEmailValidity);
        setPasswordError(checkPasswordValidity);

        if(checkEmailValidity === true && checkPasswordValidity === true){
            if(isSignIn){
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCred)=>{
                    console.log(userCred);
                    const user = userCred.user;
                    setFirebaseError("");
                    navigate("/browse");
                }).catch(error=>{
                    console.log(error.message)
                    setFirebaseError(error.message);
                })
            }else{
                createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCred)=>{
                    console.log(userCred);
                    const user = userCred.user;
                    setFirebaseError("");
                    updateProfile(auth.currentUser, {
                                    displayName: name.current.value
                    }).then(() => {
                    console.log("Profile updated successfully!");
                    let updatedUser = auth.currentUser;
                    dispatch(addUser({
                        email: updatedUser.email,
                        uid: updatedUser.uid,
                        accessToken: updatedUser.stsTokenManager?.accessToken,
                        refreshToken: updatedUser.stsTokenManager?.refreshToken,
                        displayName: updatedUser.displayName
                    }));
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    console.log("Profile update error:", error.message);
                    })
                    navigate("/browse");
                }).catch(error=>{
                    console.log(error.message)
                    setFirebaseError(error.message);
                })
            }
        }
    };
    return(
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: "url('/netflix-movies-bg.jpg')" }}
        >
            <Header />
            <div className="flex-1 flex items-center justify-center px-4 py-8">
                <form className="w-1/3 rounded-lg bg-black bg-opacity-70 flex flex-col gap-6 py-12 px-4">
                    <h3 className="text-white font-bold text-2xl py-2 w-2/3 mx-auto">{isSignIn?"Sign In":"Sign Up"}</h3>
                    <input ref={name} className={`w-2/3 mx-auto px-3 py-2 rounded bg-gray-200 ${isSignIn ? 'hidden' : 'visible'}`} placeholder="Name" type="text" />
                    <input ref={email} className="w-2/3 mx-auto px-3 py-2 rounded bg-gray-200" placeholder="Email" type="email" />
                    {emailError!==true && <p className="w-2/3 mx-auto text-red-500">{emailError}</p>}
                    <input ref={password} className="w-2/3 mx-auto px-3 py-2 rounded bg-gray-200" placeholder="Password" type="password" />
                    {passwordError!==true && <p className="w-2/3 mx-auto text-red-500">{passwordError}</p>}
                    {firebaseError && <p className="w-2/3 mx-auto text-red-500">{firebaseError}</p>}
                    <button onClick={(e)=>handleSubmit(e)} className="w-2/3 mx-auto px-3 py-2 bg-red-600 text-white rounded font-semibold" type="submit">{isSignIn?"Sign In":"Sign Up"}</button>
                    <p className={`py-2 w-2/3 mx-auto text-gray-400 ${isSignIn ? 'visible' : 'hidden'}`}>Dont have account?<span className="text-gray-200 font-bold text-l hover:cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>Sign Up</span></p>
                    <p className={`py-2 w-2/3 mx-auto text-gray-400 ${isSignIn ? 'hidden' : 'visible'}`}>Already have account?<span className="text-gray-200 font-bold text-l hover:cursor-pointer" onClick={()=>setIsSignIn(!isSignIn)}>Sign In</span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;

