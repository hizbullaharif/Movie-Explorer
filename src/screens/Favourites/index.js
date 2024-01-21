import {FlatList, Text} from 'react-native';
import React from 'react';
import Frame from '../../components/Frame';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import PopularMovie from '../../components/PopularMovies';
import styles from './styles';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import ArrowBack from '../../assets/svg/ArrowBack.svg';
import {scale} from '../../utils/scale';

const Favorites = () => {
  const navigation = useNavigation();

  const favoriteMovies = useSelector(
    state => state?.favoriteMovies?.favoriteMovies,
  );

  const Header = () => {
    const goBack = () => {
      navigation.goBack();
    };
    return (
      <CustomTouchableOpacity
        onPress={goBack}
        style={{
          marginTop: scale(25),
        }}>
        <ArrowBack />
      </CustomTouchableOpacity>
    );
  };
  const ListEmptyComponent = () => {
    return <Text style={styles.txt}>There is no favorite added yet!</Text>;
  };

  return (
    <Frame>
      <FlatList
        ListHeaderComponent={<Header />}
        keyExtractor={item => item?.id}
        numColumns={2}
        data={favoriteMovies}
        renderItem={({item}) => <PopularMovie movie={item} />}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={<ListEmptyComponent />}
      />
    </Frame>
  );
};

export default Favorites;
