import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Avatar = ({source, style}) => {
  return <Image source={source} style={style} />;
};

export default Avatar;

const styles = StyleSheet.create({});
