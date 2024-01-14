// DrawerMenuItem.js
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import {scale} from '../utils/scale';
import theme from '../theme/theme';
import {Screens} from '../constants/constants.js';
import Home from '../screens/Home/index.js';

import ArrowRight from '../assets/svg/Arrowright.svg';
import Favourite from '../assets/svg/favourite.js';

const Avatar = require('../assets/images/avatar.png');

const Drawer = createDrawerNavigator();

const DrawerMenuItem = ({scName, navigateToScreen}) => (
  <CustomTouchableOpacity
    onPress={() => navigateToScreen(scName)}
    style={styles.drawerMenuItem}>
    <View style={styles.menuItemContainer}>
      <Favourite fill={theme.palette.SecondaryLight} />
      <Text style={styles.menuItemText}>Favorite Movies</Text>
    </View>
    <ArrowRight />
  </CustomTouchableOpacity>
);

const CustomDrawerContent = () => {
  const navigation = useNavigation();
  const navigateToScreen = () => {
    navigation.navigate(Screens.Favourites);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.avatarContainer]}>
        <Image style={styles.avatarImage} source={Avatar} />
        <Text style={styles.userName}>Jane Smith</Text>
      </View>

      <View style={styles.contentContainer}>
        <DrawerMenuItem
          scName={Screens.Home}
          navigateToScreen={navigateToScreen}
        />

        <View style={styles.aboutUsContainer}>
          <View style={styles.aboutUsButton}>
            <CustomTouchableOpacity>
              <Text style={styles.aboutUsButtonText}>About us</Text>
            </CustomTouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName={Screens.MovieDetails}
    drawerPosition="right"
    hideStatusBarOnOpen
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name={Screens.Home}
      component={Home}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.PrimaryLight,
  },
  header: {
    backgroundColor: theme.palette.SecondaryLight,
    height: scale(200),
  },
  drawerMenuItem: {
    borderColor: theme.palette.SecondaryLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: scale(15),
    paddingHorizontal: scale(25, true),
    justifyContent: 'space-between',
  },
  userName: {
    marginTop: scale(13),
    fontFamily: theme.typography.type.bold,
    fontSize: scale(18),
    marginLeft: scale(12, true),
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    color: theme.palette.white,
    marginLeft: scale(12, true),
    fontSize: scale(14),
    fontFamily: theme.typography.type.semi,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 68,
    height: 68,
    marginLeft: scale(25, true),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: scale(40),
  },
  aboutUsContainer: {
    paddingHorizontal: scale(25, true),
  },
  aboutUsButton: {
    backgroundColor: theme.palette.SecondaryLight,
    borderRadius: scale(10),
  },
  aboutUsButtonText: {
    color: theme.palette.white,
    textAlign: 'center',
    padding: scale(12),
    fontFamily: theme.typography.type.bold,
    fontSize: scale(18),
  },
});

export default DrawerNavigation;
