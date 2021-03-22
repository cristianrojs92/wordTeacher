import React from 'react';
import { 
  WordDisplayContainer,
  WordDisplayGradient,
  HeaderWordDisplayContainer,
  BodyWordDisplayContainer,
  FooterWordDisplayContainer,
  WordCounter,
  Word,
} from './WordDisplay.styles';

export default function WordDisplay( { numberWordSelected, totalWords, nameWordSelected } : any) {
  return (
    <WordDisplayContainer>
      <WordDisplayGradient colors={['#373B44', '#4286f4']} >

      <HeaderWordDisplayContainer>
        <WordCounter>
          {numberWordSelected ? numberWordSelected : 0}/{totalWords ? totalWords : 0}
        </WordCounter>
      </HeaderWordDisplayContainer>

      <BodyWordDisplayContainer>
        <Word> {nameWordSelected} </Word>
      </BodyWordDisplayContainer>

      <FooterWordDisplayContainer>

      </FooterWordDisplayContainer>
      </WordDisplayGradient>
    </WordDisplayContainer>

  )
}
