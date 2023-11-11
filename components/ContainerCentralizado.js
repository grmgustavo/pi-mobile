import { View, StyleSheet } from 'react-native';

export default ContainerCentralizado = (props) => {
  return <View style={styles.containerCentralizado}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
