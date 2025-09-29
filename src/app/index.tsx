import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from '@Navigation';
import { LoadingScreen } from '../screens/LoadingScreen';

export const Application: React.FC = () => {
  const [launching, setLaunching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //setLaunching(false);
    }, 3500);
  }, []);

  return (
    <NavigationContainer>
      {launching ? <LoadingScreen /> : (
        <MainStack />
      )}
    </NavigationContainer>
  );
};
