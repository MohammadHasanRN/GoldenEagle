import { Box } from '@Theme';
import {Dimensions, Image, Platform} from 'react-native';
import Animated from 'react-native-reanimated';

// Dimentions
export const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

// Platform
export const IsIos = Platform.OS === 'ios';
export const IsWeb = Platform.OS === 'web';

// Dev Auth 
export const TestingToken = '';
export const TestingUrl = '';

// Animated Wrapper
export const AnimatedBox = Animated.createAnimatedComponent(Box);
export const AnimatedImage = Animated.createAnimatedComponent(Image);
