import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from './src/Input';

export default function App() {
  return (
    <View>
      <View style={styles.all}>
        <View style={styles.input}>
          <Input />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    width: "50%"
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 30
  }
});
