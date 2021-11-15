import Color from 'color';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>hihi</Text>
    </SafeAreaView>
  );
}

//prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : Colors.blue500},
  text: {fontSize: 20, color : Color(Colors.blue500).alpha(0.7).lighten(0.9).string()},
});
