import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import {Box, useTheme} from '@Theme';
import { ScreenHeight, ScreenWidth } from '@Core';
import { Text } from '../text';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const WinningModal: React.FC<Props> = React.memo(({visible, onDismiss}) => {
  const theme = useTheme();

  const modalTranslatin = useSharedValue(0);
  const modalOpacity = useSharedValue(0);
  const backgroundOpacity = useSharedValue(0);

  const transformStyle = useAnimatedStyle(() => ({
    transform: [{translateY: modalTranslatin.value}],
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: modalOpacity.value,
  }));

  const backgroundOpacityStyle = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  useEffect(() => {
    if (visible) {
      modalTranslatin.value = withTiming(0, {duration: 350});
      modalOpacity.value = withTiming(1, {duration: 325});
      backgroundOpacity.value = withTiming(0.85, {duration: 300});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const hideModal = useCallback(() => {
    modalTranslatin.value = withTiming(-20, {duration: 350});
    modalOpacity.value = withTiming(0, {duration: 325});
    backgroundOpacity.value = withTiming(0, {duration: 300}, () => {
      runOnJS(onDismiss)();
    });
  }, [backgroundOpacity, modalOpacity, modalTranslatin]);

  return visible ? (
    <Fragment>
      <AnimatedBox
        position="absolute"
        zIndex={5}
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="Dark"
        style={backgroundOpacityStyle}
      />
      <AnimatedBox
        zIndex={6}
        position="absolute"
        top={ScreenHeight / 4}
        left={0}
        right={0}
        bottom={0}
        style={[
          opacityStyle,
          transformStyle,
        ]}>
        <ImageBackground source={require('@Assets/images/winning-modal.png')} style={{width: ScreenWidth, height: 0.8447 * ScreenWidth}}>
          <Box flex={1} />
          <Box flex={1}>
            <Box flex={1} flexDirection="row" alignItems="center" justifyContent="center" gap="s" style={{marginTop: -theme.spacing.s}}>
              <TouchableOpacity onPress={hideModal}>
                <Box paddingHorizontal="lg" paddingVertical="s" borderRadius="sm" backgroundColor="Natural">
                  <Text variant="H6" color="Dark">New Game</Text>
                </Box>
              </TouchableOpacity>
            </Box>
            <Box flex={1} />
          </Box>
        </ImageBackground>
      </AnimatedBox>
    </Fragment>
  ) : (
    <Fragment />
  );
});
