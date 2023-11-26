import {Platform, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {routeLabel, tabIcon, tabIconActive} from './routeUtils';
import TabItem from './TabItem';

const BottomNav = (props: BottomTabBarProps) => {
  const {state, navigation} = props;
  const {bottom} = useSafeAreaInsets();

  const renderTab = (route: any, index: number) => {
    const isFocused = state.index === index;
    const isEnabled = index !== 4; // impact is disabled for now
    const icon = isFocused ? tabIconActive[route.name] : tabIcon[route.name];

    const onPress = () => {
      if (!isEnabled) {
        return;
      }
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, {merge: true});
      }
    };

    return (
      <TabItem
        focused={isFocused}
        tabName={routeLabel[route.name]}
        icon={icon}
        isDisabled={!isEnabled}
        onPress={onPress}
      />
    );
  };

  return (
    <View
      style={[
        styles.navContainer,
        {paddingBottom: Platform.OS === 'ios' ? bottom : 10},
      ]}>
      {state.routes.map(renderTab)}
    </View>
  );
};

export default BottomNav;
