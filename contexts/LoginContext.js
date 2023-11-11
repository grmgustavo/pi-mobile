import { createContext, useState } from 'react';
import { auth } from '../config/firebase'; // Importe seu módulo do Firebase com as configurações necessárias

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); // O estado para armazenar informações do usuário logado

  const login = async (email, password) => {
    try {
      // Use o método de autenticação do Firebase para fazer login
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      if (!userCredential?.user) throw Error('Usuário não encontrado')
      setUser(userCredential.user);
      return user
    } catch (err) {
      throw Error(err)
    }
  };

  const logout = async () => {
    try {
      // Use o método de autenticação do Firebase para fazer logout
      await auth.signOut();
      setUser(null);
    } catch (err) {
      console.err('Erro ao fazer logout:', err.message);
    }
  };

  const loginValues = {
    user,
    login,
    logout,
  };

  return <LoginContext.Provider value={loginValues}>{children}</LoginContext.Provider>;
};