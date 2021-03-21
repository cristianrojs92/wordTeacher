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

export default function WordDisplay() {
  return (
    <WordDisplayContainer>
      <WordDisplayGradient colors={['#373B44', '#4286f4']} >

      <HeaderWordDisplayContainer>
        <WordCounter>
          1/30000
        </WordCounter>
      </HeaderWordDisplayContainer>

      <BodyWordDisplayContainer>
        <Word> Work </Word>
      </BodyWordDisplayContainer>

      <FooterWordDisplayContainer>

      </FooterWordDisplayContainer>
      </WordDisplayGradient>
    </WordDisplayContainer>

  )
}
