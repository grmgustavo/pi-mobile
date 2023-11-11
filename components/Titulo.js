import {View, Text, StyleSheet} from 'react-native'

export default Titulo = (props) => {
  return <View style={styles.containerDoTitulo}>
  <Text style={styles.titulo}>{props.children}</Text>
  </View>
}

const styles = StyleSheet.create({
    containerDoTitulo: {
    textAlign: 'center',
    marginTop: 8,
    margin: 8
  },
    titulo: {
    fontSize: 30, fontWeight: 'bold', paddingBottom: 16
  }
})