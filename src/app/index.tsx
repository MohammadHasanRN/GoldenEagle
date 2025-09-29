import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Text } from '@Components';
import { Box } from '@Theme';

export const Application: React.FC = () => {

  return (
    <NavigationContainer>
      <Box flex={1} alignItems="center" justifyContent="center" backgroundColor="LightGray">
        <Text variant="H3">Starting Codebase</Text>
      </Box>
    </NavigationContainer>
  );
};
