import { useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TaskContext } from '../contexts/TarefaContext';


export default Tarefa = ({tarefa, navigation}) => {
  const [check, setCheck] = useState(tarefa.state === 'todo' ? 'square-outline' : 'checkbox');

  const {updateTaskState} = useContext(TaskContext)

  const handleCheckBox = (tarefa) => {
    updateTaskState(tarefa.id);
    check === 'square-outline'
      ? setCheck('checkbox')
      : setCheck('square-outline');
  };

  return (
    <>
      <View style={styles.tarefa}>
        <TouchableOpacity
          style={styles.checkboxButton}
          onPress={() => {
            handleCheckBox(tarefa);
          }}>
          <Ionicons name={check} color="#989898" size={36} />
        </TouchableOpacity>
        <Text style={styles.tituloTarefa}>{tarefa.titulo}</Text>
        <TouchableOpacity style={styles.avancarButton} onPress={() => {navigation.navigate('ListarOuEditarTarefa', {tarefa})}}>
          {' '}
          <Ionicons name="arrow-forward-outline" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tarefa: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#313131',
    width: 335,
    height: 70,
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
  },
  tituloTarefa: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
  checkboxButton: {
    margin: 12,
  },
  avancarButton: {
    margin: 12,
  },
});
