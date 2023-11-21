import { createContext, useState } from 'react';
import { auth } from '../config/firebase'; // Importe seu módulo do Firebase com as configurações necessárias

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); // O estado para armazenar informações do usuário logado

  const login = async (email, password) => {
    try {
      // Use o método de autenticação do Firebase para fazer login
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (!userCredential?.user) throw Error('Usuário não encontrado');
      setUser(userCredential.user);
      return user;
    } catch (err) {
      throw Error(err);
    }
  };

  const logout = async () => {
    try {
      if (user) {
        await auth.signOut();
      }
      setUser(null);
    } catch (err) {
      console.err('Erro ao fazer logout:', err.message);
    }
  };

  const createAccount = async (email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!userCredential?.user) throw Error('Erro ao criar conta');
      setUser(userCredential.user);
      return user;
    } catch (err) {
      throw Error(err);
    }
  };

  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      console.log('Email de redefinição de senha enviado com sucesso');
    } catch (err) {
      console.error(
        'Erro ao enviar email de redefinição de senha:',
        err.message
      );
    }
  };

  const loginValues = {
    user,
    login,
    logout,
    createAccount,
    resetPassword,
  };

  return (
    <LoginContext.Provider value={loginValues}>
      {children}
    </LoginContext.Provider>
  );
};
