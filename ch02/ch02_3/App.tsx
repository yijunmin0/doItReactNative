import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Person from './src/screens/Person';
import {createRandomPerson} from './src/data';
import {makeArray} from './src/data';

const people = makeArray(100).map(createRandomPerson);

export default function App() {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
