import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text } from '@Components';
import { Box, useTheme } from '@Theme';
import { MainStackNavigationProps, ScreenWidth } from '@Core';

export const MenuScreen: React.FC<MainStackNavigationProps<'Menu'>> = ({navigation}) => {
  const theme = useTheme();
  const {top} = useSafeAreaInsets();

  const handleNewGame = () => {
    navigation.replace('Main', {level: 1});
  };

  const handleLoadGame = async() => {
    const level = await AsyncStorage.getItem('CardsMemoryLevel');
    navigation.replace('Main', {level: level ? parseInt(level) : 1});
  };

  return (
    <Box zIndex={10} backgroundColor="Light" flex={1}>
        <Box flex={1} />
        <Box flex={5} justifyContent="space-between">
            <Box alignItems="center" style={{paddingTop: top || theme.spacing.m}}>
                <Text variant="H4" color="Success">CARDS</Text>
                <Box style={{marginTop: -theme.spacing.s}}>
                    <Text variant="H2" color="Primary">MEMORY</Text>
                </Box>
            </Box>
            <Box flex={1} alignItems="center" justifyContent="center">
                <TouchableOpacity onPress={handleNewGame}>
                  <Box width={ScreenWidth * 0.85} borderWidth={1} borderColor="DarkGray" borderRadius="s" paddingVertical="sm" alignItems="center" justifyContent="center">
                    <Text variant="H6Semi" color="Dark">New Game</Text>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLoadGame}>
                  <Box marginTop="sm" width={ScreenWidth * 0.85} borderWidth={1} borderColor="DarkGray" borderRadius="s" paddingVertical="sm" alignItems="center" justifyContent="center">
                    <Text variant="H6Semi" color="Dark">Load Game</Text>
                  </Box>
                </TouchableOpacity>
            </Box>
        </Box>
        <Box flex={1} />
    </Box>
  );
};
