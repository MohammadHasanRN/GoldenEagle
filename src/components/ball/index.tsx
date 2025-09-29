import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Box, useTheme } from '@Theme';
import { Text } from '@Components';
import { AnimatedBox } from '@Core';
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

interface Props {
    topColor: string;
    bottomColor: string;
    winningNumber?: string;
    central?: boolean;
    newRound: number;
}

export const Ball: React.FC<Props> = ({topColor, bottomColor, winningNumber, central, newRound}) => {
    const theme = useTheme();

    const ballRolling = useSharedValue('0deg');
    const ballRollingStyle = useAnimatedStyle(() => ({
        transform: [
            {rotateZ: ballRolling.value},
        ],
    }));

    useEffect(() => {
        if(newRound > 0) {
            ballRolling.value = withDelay(500, withTiming(`${newRound * 1080}deg`, {duration: 3000}));
        }
    }, [newRound]);

    return (
        <Box flex={1} alignItems="center" justifyContent="center">
            <LinearGradient
                style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: theme.spacing.m}}
                colors={[topColor, bottomColor]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}} />

            <AnimatedBox style={ballRollingStyle} position="absolute" top={0} left={0} right={0} bottom={0}>
                <Box position="absolute" height="100%" width="100%" borderRadius="xxxxl" backgroundColor="Light" left={0} top="92.5%" />
                <Box position="absolute" height="100%" width="100%" borderRadius="xxxxl" backgroundColor="Light" left={0} bottom="92.5%" />
                <Box position="absolute" height="100%" width="100%" borderRadius="xxxxl" backgroundColor="Light" left="92.5%" top={0} />
                <Box position="absolute" height="100%" width="100%" borderRadius="xxxxl" backgroundColor="Light" right="92.5%" top={0} />
            </AnimatedBox>

            <Box height={central ? '70%' : '50%'} width={central ? '70%' : '50%'} backgroundColor="Light" borderRadius="xxxxl" alignItems="center" justifyContent="center">
                <Text variant="H4" color="Success">{winningNumber}</Text>
            </Box>
        </Box>
    );
};
