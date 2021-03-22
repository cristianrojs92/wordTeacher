import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import styled from 'styled-components/native';

//Screens
import Main from './screens/main/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {
          {
            headerShown: true,
            //Se muestra un header vacio
            header: () => {
              return (
                <Header
                />
              );
            },
            ...TransitionPresets.SlideFromRightIOS
          }       
        }
      >
        <Stack.Screen 
          name="Main" 
          component={Main}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const Header = () => {
  const HeaderContainer = styled(View) `
    height: 3%;
  `;
  return (
    <HeaderContainer/>
  );
}
