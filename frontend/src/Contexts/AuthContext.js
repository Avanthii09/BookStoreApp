// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('Current User:', currentUser);
        setUser(currentUser);
      } else {
        // Set user to null when no user is found
        setUser(null);
        console.error('No user found');
      }
    }, (error) => {
      console.error('Auth State Changed Error:', error);
    });
  
    return () => unsubscribe();
  }, [setUser]);
  

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('User creation failed:', error);
      throw error;
    }
  };

 
  return (
    <AuthContext.Provider value={{ user, login, logout, createUser, getUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
      try {
        const currentUser = auth.currentUser;
  
        if (currentUser) {
          console.log('Current user:', currentUser);
          resolve(currentUser);
        } else {
          console.error('No user found');
          resolve(null);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        reject(error);
      }
    });
  };
