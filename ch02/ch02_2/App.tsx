import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  const children = [1, 2, 3].map(i => <Text>Hello {i}</Text>);
  return <SafeAreaView>{children}</SafeAreaView>;
}
