import React, { useState } from 'react';
import { 
  WordActivityContainer,
  WordInput,
  SecretWordInput,
  Next,
  Icon,
} from './WordActivity.styles';

type WordActivityProps = {
  wordSecret: string;
  onNext: (wordSecret : string, wordText : string) => boolean;
}
export default function WordActivity({ wordSecret, onNext } : WordActivityProps) {
  const [nextDisabled, setNextDisabled] = useState(true);
  const [nextBackground, setNextBackground] = useState({ 
    backgroundColor : '#dddddd',
  })
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const [wordText, setWordText] = useState('');
  const [wordIcon, setWordIcon] = useState('');

  // Resetea el componente
  const resetComponent = () => {
    setWordText('');
    setWordIcon('');
    disabledNextButton();
    hideTextSecureEntry();
  }

  // Desabilita el boton de siguiente
  const disabledNextButton = () => {
    setNextDisabled(true);
    setNextBackground({
      backgroundColor : '#dddddd',
    });
  }

  // Habilita el boton de siguiente
  const enableNextButton = () => {
    setNextDisabled(false);
    setNextBackground({
      backgroundColor : '#4286f4',
    });
  }

  // Vuelva a ocultar la palabra secreta
  const hideTextSecureEntry = () => {
    if (!flatTextSecureEntry) {
      setFlatTextSecureEntry(!flatTextSecureEntry)
    }
  }
  
  const onChangeText = (changeText : string) => {

    if ( changeText.length > 0) {
      if (changeText.trim().toLocaleLowerCase() === wordSecret.trim().toLocaleLowerCase()) {
        setWordIcon('check-bold');
        enableNextButton();

      } else {
        setWordIcon('close-thick');
      }
    }

    setWordText(changeText);
    
  }
  return (
    <WordActivityContainer>
      <WordInput
        label={ 'Palabra' }
        value={wordText}
        mode="outlined"
        theme={
          {
            colors : {
              primary: '#4286f4',
            }
          }
        }
        onChangeText={onChangeText}
        right={
          <Icon
            name={wordIcon}
            forceTextInputFocus={false}
            />}
      />
      <SecretWordInput
        label={'Palabra secreta'}
        mode="outlined"
        value={wordSecret}
        theme={
          {
            colors : {
              primary : 'grey',
            }
          }
        }
        editable = { false }
        secureTextEntry={flatTextSecureEntry}
        right={
          <Icon
            name={flatTextSecureEntry ? 'eye' : 'eye-off'}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry) }
            forceTextInputFocus={false}
            />}
      />

      <Next
        theme={
          {
            colors : {
              primary: 'white',
            }
          }
        }
        disabled = { nextDisabled }
        style = { nextBackground }
        onPress = { () => {

          //Si tenemos que pasar a la siguiente palabra
          const result = onNext(wordSecret, wordText);
          if (result === true) {
            resetComponent();
          }
        } }
      >
          Siguiente
      </Next>

    </WordActivityContainer>
  );
}
