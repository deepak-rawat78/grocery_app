import React, {useEffect, useRef} from 'react';
import {Animated, Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

type Props = {
  focused: boolean;
  tabName: string;
  icon: any;
  isDisabled: boolean;
  onPress: () => void;
};

const TabItem = (props: Props) => {
  const {focused, tabName, icon, isDisabled, onPress} = props;
  const transformY = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(transformY.current, {
      toValue: focused ? -10 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <View
      style={[styles.tabContainer, isDisabled && styles.tabContainerDisabled]}>
      <Pressable onPress={onPress} style={[styles.tabIconContent]}>
        <Animated.View
          style={[
            styles.tabIcon,
            focused && styles.activeIcon,
            {transform: [{translateY: transformY.current}]},
          ]}>
          <Image source={icon} />
        </Animated.View>
        {!focused && (
          <Text style={[styles.tabTextStyle, !focused && styles.disabledText]}>
            {tabName}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default TabItem;
