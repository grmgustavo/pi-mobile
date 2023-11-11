import { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { TaskContext } from '../contexts/TarefaContext';
import { LoginContext } from '../contexts/LoginContext';

import Tarefa from '../components/Tarefa';
import HeaderBar from '../components/HeaderBar';

export default Home = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);
  const { user } = useContext(LoginContext);

  return (
    <>
      <HeaderBar titulo={'Tarefas'} navigation={navigation} />
      <View style={styles.tarefasContainer}>
        {tasks.map((tarefa) => (
          user.uid && tarefa.uid ? <Tarefa tarefa={tarefa} navigation={navigation} /> : ''
        ))}
      </View>
      <TouchableOpacity
        style={styles.cadastrarNovaTarefa}
        onPress={() => {
          navigation.navigate(CriarTarefa);
        }}>
        <Text style={styles.cadastrarNovaTarefaTexto}>
          Cadastrar Nova Tarefa
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  tarefasContainer: {
    flex: 6,
    alignItems: 'center',
  },
  cadastrarNovaTarefa: {
    backgroundColor: '#ff4949',
    width: 331,
    height: 58,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
    justifyContent: 'center',
  },
  cadastrarNovaTarefaTexto: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
  },
});
