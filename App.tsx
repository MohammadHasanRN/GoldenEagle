import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {Application} from '@App';
import {ThemeProvider} from '@Theme';

const queryClient = new QueryClient()

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider dark={true}>
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaProvider>
            <Application />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
