import React, {memo} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import {scale} from '../../utils/scale';
import theme from '../../theme/theme';
import ArrowBack from '../../assets/svg/ArrowBack.svg';
import Favourite from '../../assets/svg/favourite.js';
import {useGetMovieByIdQuery} from '../../redux/Services/movies.js';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites} from '../../redux/slices/favoriteMoviesSlice.js';
import Toast from 'react-native-toast-message';

const HEIGHT = Dimensions.get('screen').height / 4;

const Rating = ({rating}) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{rating} Star rating</Text>
    </View>
  );
};
const handleError = ({msg}) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: msg,
  });
};

const MovieDetails = props => {
  const {movieId} = props?.route?.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(
    state => state?.favoriteMovies?.favoriteMovies,
  );
  const isFavourite = favoriteMovies?.some(movie => movie.id == movieId);

  const {
    data: dataById,
    error: errorById,
    isLoading: isLoadingById,
    isFetching: isFetchingById,
  } = useGetMovieByIdQuery(movieId);

  if (errorById) {
    handleError(errorById?.msg);
  }

  const handleAddToFavorite = () => {
    const movie = {
      id: dataById?.id,
      title: dataById?.title,
      poster_path: dataById?.poster_path,
      release_date: dataById?.release_date,
    };
    dispatch(addToFavorites(movie));
  };

  const BackgroundImage = memo(() => (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w780/${dataById?.poster_path}`,
      }}
      style={styles.imageBackground}>
      <CustomTouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: scale(25),
        }}>
        <ArrowBack />
      </CustomTouchableOpacity>
    </ImageBackground>
  ));

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.detailsContainer}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.gradientContainer}
          colors={theme.GRADIENTDETAILS}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{dataById?.title}</Text>
            <CustomTouchableOpacity onPress={handleAddToFavorite}>
              <Favourite
                fill={
                  isFavourite
                    ? theme.palette.SecondaryLight
                    : theme.palette.white
                }
              />
            </CustomTouchableOpacity>
          </View>
          <Text style={styles.releaseDate}>{dataById?.release_date}</Text>
          <Rating rating={dataById?.vote_average} />
          <Text style={styles.overview}>{dataById?.overview}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.PrimaryLight,
  },
  imageBackground: {
    height: HEIGHT * 3.2,
    padding: scale(36),
  },
  detailsContainer: {
    position: 'absolute',
    top: HEIGHT * 2,
    height: '100%',
    width: '100%',
  },
  gradientContainer: {
    flex: 1,
    padding: scale(20),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(40),
  },
  titleText: {
    fontSize: scale(24),
    fontFamily: theme.typography.type.bold,
    color: theme.palette.white,
    opacity: 1,
  },
  releaseDate: {
    marginVertical: scale(15),
    fontSize: scale(14),
    fontFamily: theme.typography.type.semi,
    opacity: 0.6,
    color: theme.palette.white,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: scale(14),
    fontFamily: theme.typography.type.semi,
    opacity: 0.6,
    color: theme.palette.white,
  },
  overview: {
    marginVertical: scale(15),
    fontSize: scale(14),
    fontFamily: theme.typography.type.semi,
    textAlign: 'justify',
    opacity: 0.6,
    color: theme.palette.white,
  },
});

export default MovieDetails;
