import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';

const avatarUrl = D.randomAvatarUrl();
const name = D.randomName();

export default function TopBar() {
  return (
    <View style={[styles.view]}>
      <Image style={[styles.avatar]} source={{uri: avatarUrl}} />
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
      <Icon name="menu" size={24} color="white" />
    </View>
  );
}

//prettier-ignore
const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: Colors.amber900, alignItems : 'center', flexDirection : 'row'},
  centerView : {flex : 1},
  text: {fontSize: 20, color: 'white', textAlign : 'center'},
  avatar : { width : 40 , height: 40 , borderRadius : 20},
});
