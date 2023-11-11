import { View, StyleSheet } from 'react-native';

export default Container = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
