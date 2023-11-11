import { View, TextInput, StyleSheet } from 'react-native';

export default NomeTarefa = ({ tarefa }) => {
  return (
    <View style={styles.nomeDaTarefa}>
      <TextInput
        placeholder={`${'Nome da tarefa'}`}
        defaultValue={`${tarefa.titulo || ''}`}
        style={styles.inputNomeDaTarefa}
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
