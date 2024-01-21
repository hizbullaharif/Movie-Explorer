import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Frame from '../../components/Frame';
import Avatar from '../../components/Avatar';
import userImage from '../../assets/images/avatar.png';
import styles from './style';

import {
  useGetMovieByLatestQuery,
  useGetPopularMoviesQuery,
} from '../../redux/Services/movies';
import PopularMovie from '../../components/PopularMovies';
import Toast from 'react-native-toast-message';

const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.title}>Hi {'Jane'},</Text>
          <Text style={styles.subtitle}>See what’s new today</Text>
        </View>
        <View>
          <Avatar source={userImage} style={styles.avatarImage} />
        </View>
      </View>
    </>
  );
};
const handleError = msg => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: msg,
  });
};
const Home = () => {
  const {data, error, isLoading, isFetching} = useGetPopularMoviesQuery();

  const {
    data: dataByLatest,
    error: errorById,
    isLoading: isLoadingById,
    isFetching: isFetchingById,
  } = useGetMovieByLatestQuery({count: 5});

  if (errorById || error) {
    handleError(errorById || errorById);
  }

  const HomeHeader = () => {
    return (
      <>
        <Header />
        <Text style={[styles.title, styles.marginV]}>Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {!error ? (
            data?.results.map((item, idx) => (
              <PopularMovie key={idx} movie={item} />
            ))
          ) : (
            <Text>There is no Popular Movies available</Text>
          )}
        </ScrollView>
        <Text style={[styles.title, styles.marginV]}>Latest</Text>
      </>
    );
  };

  const ListEmptyComponent = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.subtitleTxt}>
        There is No Latest movies available.
      </Text>
    </View>
  );

  return (
    <Frame headerVariant="v1">
      <FlatList
        keyExtractor={item => item?.id}
        ListHeaderComponent={<HomeHeader />}
        numColumns={2}
        data={dataByLatest?.results}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item}) => <PopularMovie movie={item} />}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </Frame>
  );
};

export default Home;
