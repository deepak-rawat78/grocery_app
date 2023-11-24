import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import styles, {CAROUSEL_DOT_WIDTH} from './styles';

const {width} = Dimensions.get('window');

const Carousel = ({
  data,
  containerStyle,
}: {
  data: string[];
  containerStyle: StyleProp<ViewStyle>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(xPosition / totalWidth);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const keyExtractor = (item: string) => String(item);

  const renderDot = (_: undefined, index: number) => {
    return (
      <View style={[styles.dot, currentIndex === index && styles.activeDot]} />
    );
  };

  const renderItem = ({item}: {item: string}) => {
    return <Image source={{uri: item}} style={styles.renderItem} />;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        snapToInterval={width}
        pagingEnabled={true}
        style={styles.flatList}
        onScroll={onScroll}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={[
          styles.dotsContainter,
          {
            width: CAROUSEL_DOT_WIDTH * data?.length + 8 * (data?.length - 1),
          },
        ]}>
        {[...new Array(data?.length)].map(renderDot)}
      </View>
    </View>
  );
};

export default Carousel;
