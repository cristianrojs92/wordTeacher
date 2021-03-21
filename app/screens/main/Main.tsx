import React from 'react';
import { View, ScrollView } from 'react-native';

//Componentes
import WordDisplay from '../../components/wordDisplay/WordDisplay';
import WordActivity from '../../components/wordActivity/WordActivity';

export default function Main() {
  return (
    <ScrollView>
      <View style = {
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: '2%',
        }
      }>
        <WordDisplay></WordDisplay>
        <WordActivity></WordActivity>
      </View>
    </ScrollView>

  );
}
