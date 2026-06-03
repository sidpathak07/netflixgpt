import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [profileMenu, setProfileMenu] = useState(false);
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully.");
                setProfileMenu(false);
                navigate("/");
            })
            .catch(error => console.log("Sign out error:", error.message));
    }
    return (
        <header className="text-white p-4 flex justify-between">
            <img className="w-44 h-10 bg-gradient-to-b from-gray-700 to-transparent" src="/Netflix_Logo_PMS.png" alt="Netflix Logo" />
            {user && <div className="relative">
                <img className="w-10 h-10 rounded cursor-pointer" src="/userprofile.png" alt="Profile" onClick={() => setProfileMenu(!profileMenu)} />
                {
                    profileMenu && (
                         <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-black/90 rounded shadow-lg z-20">
                            <ul className="flex flex-col text-sm">
                                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">My Profile</li>
                                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">Settings</li>
                                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer" onClick={()=>signOutUser()}>Sign out</li>
                            </ul>
                        </div>  
                    )
                }
            </div>}
        </header>
    );
}

export default Header;