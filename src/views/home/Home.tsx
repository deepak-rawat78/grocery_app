import {View, Text, TextInput, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './Home.styles';
import FoodCard from '../../components/FoodCard/FoodCard';
import {searchIcon} from '../../assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DropDown from '../../components/DropDown/DropDown';

const SearchBox = ({value, onChangeText}) => {
  return (
    <View style={styles.searchContainer}>
      <Image source={searchIcon} />
      <TextInput
        value={value}
        placeholder="Search Products or store"
        onChangeText={onChangeText}
        style={styles.searchInput}
      />
    </View>
  );
};

const Header = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <Text style={styles.headerTitle}>Hey, Rahul</Text>
      <SearchBox />
      <View style={styles.dropDownContainer}>
        <DropDown title={'Deliver to'} description="Green Way 3000, Sylhet" />
        <DropDown title={'Within'} description="1 Hour" />
      </View>
    </View>
  );
};

const Home = () => {
  const renderItem = () => {
    return <FoodCard containerStyles={styles.foodItem} />;
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.recommandedText}>Recommanded</Text>
      <FlatList
        data={new Array(10).fill(0)}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default Home;
