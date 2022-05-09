import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase.init";



const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
   const signInWithGoogle = () => {
       signInWithPopup(auth, googleprovider)
         .then(result => {
           const user = result.user;
           setUser(user);
         });
   };
const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      });
}

   useEffect(()=>{
        onAuthStateChanged(auth,user => {
            setUser(user);
        });
   },[])


return {    
     signInWithGoogle,
     user,
    auth,
    handleSignOut

   };
    };
    export default useFirebase;