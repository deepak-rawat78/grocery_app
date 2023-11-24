import {View, Text, TextInput, Image, FlatList} from 'react-native';
import React, {useMemo, useState} from 'react';
import styles from './Home.styles';
import FoodCard from '../../components/FoodCard/FoodCard';
import {searchIcon} from '../../assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DropDown from '../../components/DropDown/DropDown';
import {getProductList} from '../../service/apis/productService';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ProductType} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screens} from '../../routes/routeUtils';

const SearchBox = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (value: string) => void;
}) => {
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

const Header = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (value: string) => void;
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <Text style={styles.headerTitle}>Hey, Rahul</Text>
      <SearchBox value={value} onChangeText={onChangeText} />
      <View style={styles.dropDownContainer}>
        <DropDown title={'Deliver to'} description="Green Way 3000, Sylhet" />
        <DropDown title={'Within'} description="1 Hour" />
      </View>
    </View>
  );
};

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [searchText, setSearchText] = useState('');
  const result = useInfiniteQuery<any>({
    queryKey: ['queryKeys.notificationList'],
    initialPageParam: 0,
    queryFn: ({pageParam = 0}) => getProductList({skip: pageParam, limit: 10}),
    refetchOnMount: false,
    getNextPageParam: lastPage => {
      const lastPageCursor = lastPage.config.params?.skip || 0;
      const limit = lastPage.config.params?.limit || 10;
      const totalCount = lastPage?.data?.total || 0;
      const hasNextPage = lastPageCursor + limit < totalCount;
      const nextPageCursor = lastPageCursor + (limit || 10);
      return hasNextPage ? nextPageCursor : undefined;
    },
  });

  const {hasNextPage, isFetchingNextPage, fetchNextPage} = result;

  const productList = useMemo(() => {
    if (
      !result?.data?.pages?.length ||
      !result?.data?.pages?.[0]?.data?.products
    ) {
      return null;
    }

    return {
      totalCount: result?.data?.pages?.[0]?.data?.total || 0,
      result: result?.data?.pages?.flatMap(page => page?.data?.products) || [],
    };
  }, [result?.data]);

  const handleSearchText = (value: string) => setSearchText(value);

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage && fetchNextPage) {
      fetchNextPage();
    }
  };

  const handleClickOnProduct = (id: number) => {
    navigation.navigate(Screens.PRODUCT_DETAIL, {id});
  };

  const renderItem = ({item}: {item: ProductType}) => {
    return (
      <FoodCard
        data={item}
        containerStyles={styles.foodItem}
        onPress={() => handleClickOnProduct(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header value={searchText} onChangeText={handleSearchText} />
      <Text style={styles.recommandedText}>Recommanded</Text>
      <FlatList
        data={productList?.result}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default Home;
