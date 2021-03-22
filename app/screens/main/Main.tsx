import React,  { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

//Componentes
import WordDisplay from '../../components/wordDisplay/WordDisplay';
import WordActivity from '../../components/wordActivity/WordActivity';
import  Words  from '../../types/words';

export default function Main() {

  const [numberWordSelected, setNumberWordSelected] = useState(0);
  const [nameWordSelected, setNameWordSelected] = useState('');
  const [wordSecret, setWordSecret] = useState('');
  const [totalWords, setTotalWords] = useState(10);

  const words = new Words();

  words.getAll().then((words)=> {
    setTotalWords(words.length);
    setNameWordSelected(words[numberWordSelected].name);
    setWordSecret(words[numberWordSelected].value);
  });

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
        <WordDisplay numberWordSelected = {numberWordSelected}
                     totalWords = {totalWords}
                     nameWordSelected = {nameWordSelected}/>
        <WordActivity wordSecret = {wordSecret} />
      </View>
    </ScrollView>

  );
}
