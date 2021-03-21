import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const WordDisplayContainer = styled(View)`
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #4286f4;
`;

export const WordDisplayGradient = styled(LinearGradient) `
  display: flex;
  height: 300px;
  border-radius: 15px;
`;

export const HeaderWordDisplayContainer = styled(View) `
  flex-direction: row-reverse;
  height: 100px;
`;

export const WordCounter = styled(Text)`
  color: white;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 20px;
`;

export const Word = styled(Text)`
  color: white;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 50px;
`;

export const BodyWordDisplayContainer = styled(View) `
  width: 100%;
  height: 200px;
  justify-content: center;
  flex-direction: row;

`;

export const FooterWordDisplayContainer = styled(View) `
  height: 10px;
`;