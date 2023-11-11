import { ActivityIndicator } from 'react-native-paper';

import ContainerCentralizado from '../components/ContainerCentralizado';
import Titulo from '../components/Titulo';

export default Splash = () => {
  return (
    <>
      <ContainerCentralizado>
        <Titulo>Gerenciador de Tarefas</Titulo>
        <ActivityIndicator />
      </ContainerCentralizado>
    </>
  );
};
