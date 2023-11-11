import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import CriarConta from '../screens/CriarConta';
import Home from '../screens/Home';
import RecuperarSenha from '../screens/RecuperarSenha';
import CriarTarefa from '../screens/CriarTarefa';
import ListarOuEditarTarefa from '../screens/ListarOuEditarTarefa';

import { LoginContext } from '../contexts/LoginContext';

const Stack = createNativeStackNavigator();

export default MainNavigator = () => {
  const { user } = useContext(LoginContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
      <Stack.Screen
        name="ListarOuEditarTarefa"
        component={ListarOuEditarTarefa}
      />
      <Stack.Screen name="CriarTarefa" component={CriarTarefa} />
      <Stack.Screen name="CriarConta" component={CriarConta} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
    </Stack.Navigator>
  );
};
