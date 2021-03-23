import React,  { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

//Componentes
import WordDisplay from '../../components/wordDisplay/WordDisplay';
import WordActivity from '../../components/wordActivity/WordActivity';

//Utilidades
import  { storeData, getData } from '../../utils/storage';

export default function Main() {

  const [activityWors, setActivityWors] = useState<activityWord>({totalWords: 0, indexSelectedWord: 0 });

  //  Obtiene todas las palabras almacenadas
  const getActivityWors = async () : Promise<activityWord> => {


    // Obtiene las palabras almacenadas en el storage
    const getAllWords = async () : Promise<word[]> => {
      let words : word[] = [];
      
      try {

        //Consulta al storage
        const wordsValues = await getData('words');
        if (wordsValues !== undefined) {
          words = JSON.parse(wordsValues);
        }

      } catch (error) {
        console.log(`(getAllWords) Se produjo un error ${error}`);      
      }
      return words;
    }

    // Obtiene el indice de la palabra seleccionada
    const getSelectedWord = async () : Promise<number> => {
      let selectedWord : number = 0;
      
      try {

        //Consulta al storage
        const selectedWordValue = await getData('selectedWord');
        if (selectedWordValue !== undefined) {
          selectedWord = parseInt(selectedWordValue);
        }

      } catch (error) {
        console.log(`(getSelectedWord) Se produjo un error ${error}`);      
      }
      return selectedWord;
    }
    const indexSelectedWord = await getSelectedWord();
    const words = await getAllWords();

    let activityWord = {
      words,
      totalWords: words.length,
      indexSelectedWord,
    };

    return activityWord;
  }

  // Verifica si la palabra es correcta y pasa a la siguiente
  const isValid = (wordSecret: string, value: string) : boolean => {
      let res = false;

      //Si los valores son iguales
      if (wordSecret && value) {

        //Evitamos ingreso de espacios y de letras en mayuscula para una comparacion mas precisa
        res = wordSecret.trim().toLocaleLowerCase() === value.trim().toLocaleLowerCase();
      }
      return res;
  }

  // Pasa a la siguente palabra
  const nextWord = (wordSecret: string, value: string) : boolean => {
    let ret = false;
    let nextWord : word = {
      name: '',
      value: ''
    };

    // Verificamos si la palabra es valida
    if (isValid(wordSecret, value)) {
      // Obtenemos el siguente indice
      let nextNumberWordSelected = activityWors.indexSelectedWord + 1;

      if (activityWors.words) {
        if (activityWors.words[nextNumberWordSelected] === undefined) {

          // Volvemos a la primer palabra
          nextNumberWordSelected = 0;
        }
     }

      // Actualizamos estado
      const newWord :activityWord = {
        ... activityWors,
        indexSelectedWord : nextNumberWordSelected,
      };

      ret = true;
      setActivityWors(newWord);

    }

    return ret;
  }

  useEffect(() => {
    getActivityWors().then((activityWord)=> {
      setActivityWors(activityWord);
    });
  }, [activityWors.words?.length]);

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

      { 
        activityWors  &&
        <WordDisplay numberWordSelected = { activityWors.indexSelectedWord }
                    totalWords = { activityWors.totalWords }
                    nameWordSelected = { (activityWors.words !== undefined && activityWors.words.length > 0) ?  activityWors.words[activityWors.indexSelectedWord].name : '' }/>
      }
      {
        (activityWors.words !== undefined && activityWors.words[activityWors.indexSelectedWord] !== undefined) &&
        <WordActivity wordSecret = { activityWors.words[activityWors.indexSelectedWord].value }
                      onNext = { nextWord } /> 
      }
      </View>
    </ScrollView>

  );
}
