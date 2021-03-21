import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper';

export const WordActivityContainer = styled(View)`
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: #4286f4;
  display: flex;
  height: 350px;
 
`;

export const WordInput = styled(TextInput)`
  width: 70%;
  align-self: center;
  margin: 40px;
`;

export const SecretWordInput = styled(TextInput)`
  width: 70%;
  align-self: center;
`;

export const Next = styled(Button)`
  margin-top: 40px;
  width: 40%;
  height: 12%;
  align-self: center;
`;

export const Icon = TextInput.Icon;