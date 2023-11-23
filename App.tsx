import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
