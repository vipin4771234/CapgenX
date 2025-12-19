/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import store from './src/store';
import Navigators from './src/navigation/Navigators';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaInsetsContext.Consumer>
            {insets => (
              <View style={{ flex: 1, paddingTop: insets?.top }}>
                <StatusBar barStyle="dark-content" />
                <Navigators />
              </View>
            )}
          </SafeAreaInsetsContext.Consumer>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    backgroundColor: 'lightblue',
    padding: 20,
  },
});

export default App;
