import { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TaskContext } from '../contexts/TarefaContext';
import { LoginContext } from '../contexts/LoginContext';

import HeaderBar from '../components/HeaderBar';

export default CriarTarefa = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const { criarTask } = useContext(TaskContext);
  const {user} = useContext(LoginContext)

  const handleCriarTarefa = () => {
    criarTask({ titulo, descricao, uid: user.uid });
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <HeaderBar titulo="Criar Tarefa" navigation={navigation} />
        <View style={styles.tituloDaTarefa}>
          <TextInput
            placeholder={`${'titulo da tarefa'}`}
            onChangeText={(text) => {
              setTitulo(text);
              setIsTitleValid(!!text);
            }}
            defaultValue={titulo}
            style={styles.inputTituloDaTarefa}
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.descricaoDaTarefa}>
          <TextInput
            placeholder={`${'Descrição da tarefa'}`}
            onChangeText={(text) => {
              setDescricao(text);
              setIsDescriptionValid(!!text)
            }}
            defaultValue={descricao}
            style={styles.inputDescricaoDaTarefa}
          />
        </View>
        <View style={styles.buttonsArea}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              navigation.navigate(Home);
            }}>
            <Text style={styles.buttonsTexto}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              if (isTitleValid && isDescriptionValid) {
                handleCriarTarefa();
                navigation.navigate(Home);
              } else {
                Alert.alert(
                  'Erro',
                  'O seguinte dado está incorreto: Título e Descrição são obrigatórios.'
                );
              }
            }}>
            <Text style={styles.buttonsTexto}>Criar</Text>
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
  tituloDaTarefa: {
    marginTop: 18,
    alignItems: 'center',
  },
  inputTituloDaTarefa: {
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
