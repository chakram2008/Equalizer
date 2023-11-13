import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeEqualizer from 'react-native-equalizer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeEqualizer.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
