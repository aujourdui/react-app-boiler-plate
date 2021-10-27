import { auth, provider, signInWithPopup, signOut } from "../firebase/firebase";

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return signInWithPopup(auth, provider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return signOut(auth);
  };
};

