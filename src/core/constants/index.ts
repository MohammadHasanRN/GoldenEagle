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

export const Cards = [
    require('@Assets/images/cards/2_of_clubs.png'),
    require('@Assets/images/cards/3_of_clubs.png'),
    require('@Assets/images/cards/4_of_clubs.png'),
    require('@Assets/images/cards/5_of_clubs.png'),
    require('@Assets/images/cards/6_of_clubs.png'),
    require('@Assets/images/cards/7_of_clubs.png'),
    require('@Assets/images/cards/8_of_clubs.png'),
    require('@Assets/images/cards/9_of_clubs.png'),
    require('@Assets/images/cards/10_of_clubs.png'),
    require('@Assets/images/cards/ace_of_clubs.png'),
    require('@Assets/images/cards/jack_of_clubs.png'),
    require('@Assets/images/cards/king_of_clubs.png'),
    require('@Assets/images/cards/queen_of_clubs.png'),
    require('@Assets/images/cards/2_of_hearts.png'),
    require('@Assets/images/cards/3_of_hearts.png'),
    require('@Assets/images/cards/4_of_hearts.png'),
    require('@Assets/images/cards/5_of_hearts.png'),
    require('@Assets/images/cards/6_of_hearts.png'),
    require('@Assets/images/cards/7_of_hearts.png'),
    require('@Assets/images/cards/8_of_hearts.png'),
    require('@Assets/images/cards/9_of_hearts.png'),
    require('@Assets/images/cards/10_of_hearts.png'),
    require('@Assets/images/cards/ace_of_hearts.png'),
    require('@Assets/images/cards/jack_of_hearts.png'),
    require('@Assets/images/cards/king_of_hearts.png'),
    require('@Assets/images/cards/queen_of_hearts.png'),
    require('@Assets/images/cards/2_of_diamonds.png'),
    require('@Assets/images/cards/3_of_diamonds.png'),
    require('@Assets/images/cards/4_of_diamonds.png'),
    require('@Assets/images/cards/5_of_diamonds.png'),
    require('@Assets/images/cards/6_of_diamonds.png'),
    require('@Assets/images/cards/7_of_diamonds.png'),
    require('@Assets/images/cards/8_of_diamonds.png'),
    require('@Assets/images/cards/9_of_diamonds.png'),
    require('@Assets/images/cards/10_of_diamonds.png'),
    require('@Assets/images/cards/ace_of_diamonds.png'),
    require('@Assets/images/cards/jack_of_diamonds.png'),
    require('@Assets/images/cards/king_of_diamonds.png'),
    require('@Assets/images/cards/queen_of_diamonds.png'),
    require('@Assets/images/cards/2_of_spades.png'),
    require('@Assets/images/cards/3_of_spades.png'),
    require('@Assets/images/cards/4_of_spades.png'),
    require('@Assets/images/cards/5_of_spades.png'),
    require('@Assets/images/cards/6_of_spades.png'),
    require('@Assets/images/cards/7_of_spades.png'),
    require('@Assets/images/cards/8_of_spades.png'),
    require('@Assets/images/cards/9_of_spades.png'),
    require('@Assets/images/cards/10_of_spades.png'),
    require('@Assets/images/cards/ace_of_spades.png'),
    require('@Assets/images/cards/jack_of_spades.png'),
    require('@Assets/images/cards/king_of_spades.png'),
    require('@Assets/images/cards/queen_of_spades.png'),
]