import React from 'react';
import {SafeAreaView, Alert, Button, TextInput} from 'react-native';
import {Text, TouchableOpacity, TouchableHighlight} from 'react-native';

export default function App() {
  const onPress = () => {
    Alert.alert('home pressed', 'message');
  };
  return (
    <SafeAreaView>
      <Button title="home" onPress={onPress} />
      <TouchableOpacity>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}
