import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

export default HeaderBar = ({ navigation, titulo }) => {
  return <View>
        <Appbar.Header style={styles.appBarStyle}>
        <TouchableOpacity><Ionicons name='arrow-back' color='white' size={36} onPress={()=> {navigation.goBack()}}/></TouchableOpacity>
        <Appbar.Content title={titulo} />
      </Appbar.Header>
  </View>
}


const styles = StyleSheet.create({
  appBarStyle: {
    backgroundColor: '#313131',
    height: 70
  },
});