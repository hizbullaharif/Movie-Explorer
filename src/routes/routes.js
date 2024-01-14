import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import theme from '../theme/theme';
import {Screens} from '../constants/constants.js';

// screens
import MovieDetails from '../screens/Details';
import FavouriteScr from '../screens/Favourites';
import DrawerNavigation from './DrawerNavigation.js';

const Stack = createNativeStackNavigator();

const Avatar = require('../assets/images/avatar.png');

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.palette.transparent} translucent />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name={Screens.MovieDetails} component={MovieDetails} />
        <Stack.Screen name={Screens.Favourites} component={FavouriteScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
