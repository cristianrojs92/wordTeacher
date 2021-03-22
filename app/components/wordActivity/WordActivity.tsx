import React, { useState } from 'react';
import { 
  WordActivityContainer,
  WordInput,
  SecretWordInput,
  Next,
  Icon,
} from './WordActivity.styles';

export default function WordActivity({ wordSecret } : any) {

  const [nextDisabled, setNextDisabled] = useState(true);
  const [nextBackground, setNextBackground] = useState({ 
    backgroundColor : '#dddddd',
  })
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const [wordText, setWordText] = useState('');
  const [wordIcon, setWordIcon] = useState('');


  const onChangeText = (changeText : string) => {

    if ( changeText.length > 0) {
      if (changeText.trim().toLocaleLowerCase() === wordSecret.trim().toLocaleLowerCase() ) {
        setWordIcon('check-bold');
        setNextDisabled(false);
        setNextBackground({
          backgroundColor : '#4286f4',
        });
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
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry) }
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
      >
          Siguiente
      </Next>

    </WordActivityContainer>
  );
}
