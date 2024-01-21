import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {memo, useCallback} from 'react';
import {Screens} from '../constants/constants';
import {Image, StyleSheet, Text} from 'react-native';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import {scale} from '../utils/scale';
import theme from '../theme/theme';

const defaultSourec = require('../assets/images/placeHolder.png');

const PopularMovie = memo(({movie}) => {
  const navigation = useNavigation();

  const navigateToMovieDetails = useCallback(() => {
    navigation.navigate(Screens.MovieDetails, {movieId: movie?.id});
  }, [navigation, movie?.id]);

  return (
    <CustomTouchableOpacity
      style={styles.container}
      onPress={navigateToMovieDetails}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w780/${movie?.poster_path}`,
        }}
        defaultSource={defaultSourec}
        height={scale(225)}
        style={styles.image}
        resizeMode="cover"
      />
      <Text numberOfLines={2} style={[styles.movieTitle]}>
        {movie?.title}
      </Text>
      <Text style={styles.movieReleaseDate}>{movie?.release_date}</Text>
    </CustomTouchableOpacity>
  );
});

export default PopularMovie;

const styles = StyleSheet.create({
  container:{
    flex: 1, marginRight: scale(15)
  },
  movieTitle: {
    fontSize: scale(16),
    lineHeight: scale(18),
    marginTop: scale(14),
    fontFamily: theme.typography.type.bold,
    color: theme.palette.white,
    width: scale(125, true),
  },
  movieReleaseDate: {
    fontSize: scale(14),
    lineHeight: scale(16),
    marginTop: scale(5),
    fontFamily: theme.typography.type.semi,
    opacity: 0.6,
    color: theme.palette.white,
  },
  image: {
    borderRadius: 25,
  },
});
