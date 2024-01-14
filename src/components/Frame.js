import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import {scale} from '../utils/scale';
import theme from '../theme/theme';
import MainMenuIcon from '../assets/svg/Menu.svg';
import Favourite from '../assets/svg/favourite.js';
import {Screens} from '../constants/constants.js';

const COLORS = [
  'rgba(255,176,57,0.7)',
  'rgba(255,176,57,0.9)',
  'rgba(255,176,57,0.1)',
];

const HomeMenu = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const navigateToFavorScreen = () => {
    navigation.navigate(Screens.Favourites);
  };

  return (
    <View style={styles.menuContainer}>
      <CustomTouchableOpacity onPress={toggleDrawer}>
        <MainMenuIcon />
      </CustomTouchableOpacity>
      <CustomTouchableOpacity onPress={navigateToFavorScreen}>
        <Favourite fill={theme.palette.white} />
      </CustomTouchableOpacity>
    </View>
  );
};

const Frame = ({headerVariant, children}) => (
  <>
    <StatusBar translucent backgroundColor={theme.palette.transparent} />
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
        colors={COLORS}>
        {headerVariant === 'v1' && <HomeMenu />}
        {children}
      </LinearGradient>
    </View>
  </>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.palette.PrimaryLight,
    paddingVertical: 0,
  },
  linearGradient: {
    flex: 1,
    padding: scale(20),
  },
  menuContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(30),
  },
});

export default Frame;
