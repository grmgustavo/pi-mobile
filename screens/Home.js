import { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

import { TaskContext } from '../contexts/TarefaContext';
import { LoginContext } from '../contexts/LoginContext';

import Tarefa from '../components/Tarefa';

export default Home = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);
  const { user, logout } = useContext(LoginContext);

  return (
    <>
      <View>
        <Appbar.Header style={styles.appBarStyle}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              color="white"
              size={36}
              onPress={async () => {
                navigation.navigate(Login);
                await logout();
              }}
            />
          </TouchableOpacity>
          <Appbar.Content title={'Tarefas'} />
        </Appbar.Header>
      </View>
      <View style={styles.tarefasContainer}>
        {tasks.map((tarefa) =>
          user.uid === tarefa.uid ? (
            <Tarefa tarefa={tarefa} navigation={navigation} />
          ) : (
            ''
          )
        )}
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
  appBarStyle: {
    backgroundColor: '#313131',
    height: 70,
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
