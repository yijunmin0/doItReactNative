import React from 'react';
import {StyleSheet, SafeAreaView, View, Platform, Alert} from 'react-native';
import {Colors} from 'react-native-paper';
import TopBar from './src/screens/TopBar';
import Content from './src/screens/Content';
import BottomBar from './src/screens/BottomBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconPressed = () => Alert.alert('Icon Pressed');

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" onPress={iconPressed} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35,
  },
});
