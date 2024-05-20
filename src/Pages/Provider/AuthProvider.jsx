import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../Firebase.config";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const UserSignIn = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLoginin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const fineUser = currentUser?.email || user?.email
            const LogUser = { email: fineUser }
            setUser(currentUser)
            setLoding(false)

            if (currentUser) {
                axios.post('https://doctor-mama-is-comming-projects.vercel.app/jwt', LogUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }

            //some problems this line , don't delete this token
            else{
                axios.post('https://doctor-mama-is-comming-projects.vercel.app/logOut',LogUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        //token line is end 

        })
        return () => {
            return unSubscribe()
        }

    }, [])



    const Info = {
        user,
        UserSignIn,
        userLoginin,
        logOut,
        loding
    }

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;