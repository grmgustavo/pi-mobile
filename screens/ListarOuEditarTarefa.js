import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState, useContext } from 'react';

import { useRoute } from '@react-navigation/native';

import { TaskContext } from '../contexts/TarefaContext';
import { LoginContext } from '../contexts/LoginContext';


import HeaderBar from '../components/HeaderBar';

export default ListarOuEditarTarefa = ({ navigation }) => {
  const route = useRoute();
  const { tarefa } = route.params;

  const [titulo, setTitulo] = useState(`${tarefa.titulo}`);
  const [descricao, setDescricao] = useState(`${tarefa.descricao}`);

  const { updateTask, deleteTask } = useContext(TaskContext);
  const { user } = useContext(LoginContext);

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const handleUpdateTask = () => {
    updateTask(tarefa.id, user.uid, { titulo, descricao });
  };

  const handleDeleteTask = () => {
    deleteTask(tarefa.id);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <HeaderBar titulo={tarefa.titulo} navigation={navigation} />
        <View style={styles.nomeDaTarefa}>
          <TextInput
            placeholder="Nome da tarefa"
            defaultValue={titulo || ''}
            onChangeText={(text) => {
              setTitulo(text);
              setIsTitleValid(!!text);
            }}
            style={styles.inputNomeDaTarefa}
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.descricaoDaTarefa}>
          <TextInput
            placeholder="Descrição da tarefa"
            onChangeText={(text) => {
              setDescricao(text);
              setIsDescriptionValid(!!text);
            }}
            style={styles.inputDescricaoDaTarefa}
            defaultValue={descricao || ''}
          />
        </View>
        <View style={styles.buttonsArea}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              handleDeleteTask();
              navigation.navigate(Home);
            }}>
            <Text style={styles.buttonsTexto}>Apagar Tarefa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              if (isTitleValid && isDescriptionValid) {
                handleUpdateTask();
                navigation.navigate(Home);
              } else {
                Alert.alert(
                  'Erro',
                  'O seguinte dado está incorreto: Título e Descrição são obrigatórios.'
                );
              }
            }}>
            <Text style={styles.buttonsTexto}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 26,
  },
  buttons: {
    backgroundColor: 'red',
    width: 149,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonsTexto: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
  },
  nomeDaTarefa: {
    marginTop: 18,
    alignItems: 'center',
  },
  inputNomeDaTarefa: {
    backgroundColor: '#989898',
    width: 335,
    height: 65,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
  },
  descricaoDaTarefa: {
    marginTop: 18,
  },
  inputDescricaoDaTarefa: {
    backgroundColor: '#BFBFBF',
    width: 336,
    height: 361,
    fontSize: 18,
    textAlign: 'start',
    fontWeight: '400',
    borderRadius: 5,
  },
});
