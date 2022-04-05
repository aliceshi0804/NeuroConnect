import React, {useContext,useEffect,useState} from "react";
import { collection, addDoc } from "firebase/firestore"; 
import {auth, db} from '../firebase'
import { getAuth, signOut} from "firebase/auth";
import { useHistory } from 'react-router-dom';

const isAuth = getAuth();

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] =useState(true)
    const history = useHistory()
    function signup(email,password,data){
        auth.createUserWithEmailAndPassword(email,password).then((cred) => {
            try {
                const docRef = addDoc(collection(db, "users"), {
                uid: cred.user.uid,
                name: data.Name,
                email: cred.user.email,
                position: data.Position,
                neurodivergent: data.Neuro,
                neuroSpecific: data.NeuroSpecific,
                pronouns: data.Pronouns,
                interests: data.Interest
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
    }

//     function getUser(email){
//         auth.getUserByEmail(email).then((userRecord) => {
//             try{
//                  // See the UserRecord reference doc for the contents of userRecord.
//             console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//             }
//             catch(e){
//                 console.log('Error fetching user data:', e);
//             }
//         });
//     }

//     function getMultipleUsers(){
//         const listAllUsers = (nextPageToken) => {
//   // List batch of users, 1000 at a time.
//   auth.listUsers(1000, nextPageToken).then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('user', userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
//     return listAllUsers();
// };
//     }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        signOut(isAuth).then(() => {history.push('/')}).catch((error) => {
            console.log(error)
        })
    }   

    useEffect(()=>{
        const unsub =auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    }, [])
    
    const value ={
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
