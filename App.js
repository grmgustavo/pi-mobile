import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './routes/MainNavigator';

import { TaskProvider } from './contexts/TarefaContext';
import { LoginProvider } from './contexts/LoginContext';

export default App = () => {
  return (
    <LoginProvider>
      <TaskProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </TaskProvider>
    </LoginProvider>
  );
};
