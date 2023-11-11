import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import ContainerCentralizado from '../components/ContainerCentralizado';
import Titulo from '../components/Titulo';

export default RecuperarSenha = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  return (
    <ContainerCentralizado>
      <Titulo>Recuperar Senha</Titulo>
      <View style={styles.loginArea}>
        <TextInput style={styles.loginInput} placeholder={'E-mail'} value={email} onChangeText={(e)=>{setEmail(e)}}/>
      </View>
      <View style={styles.buttonsArea}>
        <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.buttonsText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entrarButton} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.buttonsText}>Enviar</Text>
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
