import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Application} from '@App';
import {ThemeProvider} from '@Theme';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <ThemeProvider dark={true}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <Application />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
