import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
