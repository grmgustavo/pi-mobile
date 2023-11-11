import { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import ContainerCentralizado from '../components/ContainerCentralizado';
import Titulo from '../components/Titulo';

import { LoginContext } from '../contexts/LoginContext';

export default Login = ({ navigation }) => {
  const { user, login } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  return (
    <ContainerCentralizado>
      <Titulo>Gerenciador de Tarefas</Titulo>
      <View style={styles.loginArea}>
        <TextInput
          style={styles.loginInput}
          placeholder={'E-mail'}
          onChangeText={(text) => {
            setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text));
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.loginInput}
          secureTextEntry
          placeholder={'Senha'}
          onChangeText={(text) => {
            setPasswordValid(text.length >= 6);
            setSenha(text);
          }}
        />
      </View>
      <View style={styles.recuperarSenha}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecuperarSenha');
          }}>
          <Text>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsArea}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('CriarConta');
          }}>
          <Text style={styles.buttonsText}>Criar Conta</Text>
        </TouchableOpacity>{' '}
        <TouchableOpacity
          style={styles.entrarButton}
          onPress={async () => {
            try {
              await login(email, senha);
            } catch (error) {
              alert('Erro durante o login:', error);
            }
          }}>
          <Text style={styles.buttonsText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ContainerCentralizado>
  );
};

const styles = StyleSheet.create({
  loginArea: {
    width: 336,
    height: 187,
    backgroundColor: '#313131',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 56,
    borderRadius: 5,
  },
  loginInput: {
    width: 216,
    height: 47,
    backgroundColor: '#989898',
    margin: 15,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: `bold`,
    color: '#fff',
  },
  recuperarSenha: {
    marginTop: 10,
  },
  buttonsArea: {
    marginTop: 19,
    flexDirection: 'row',
  },
  buttons: {
    width: 149,
    height: 58,
    backgroundColor: '#FF4949',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonsText: {
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
  },
  entrarButton: {
    marginLeft: 32,
    width: 149,
    height: 58,
    backgroundColor: '#FF4949',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
