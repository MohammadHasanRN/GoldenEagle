import { Ball, Text } from '@Components';
import { AnimatedBox, ScreenWidth } from '@Core';
import { Box } from '@Theme';
import React, { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

export const InnerLoader: React.FC = () => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box position="absolute" flexDirection="row" alignItems="center" justifyContent="space-between" width={ScreenWidth / 1.5} height={ScreenWidth / 1.5}>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FFA172" bottomColor="#E71F1F" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#C1FF6A" bottomColor="#28C16A" newRound={1} />
                    </AnimatedBox>
                </Box>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#C1FF6A" bottomColor="#28C16A" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FFA172" bottomColor="#E71F1F" newRound={1} />
                    </AnimatedBox>
                </Box>
            </Box>
            <Box position="absolute" flexDirection="row" alignItems="center" justifyContent="space-between" width={ScreenWidth / 1.5} height={ScreenWidth / 1.5} style={{transform: [{rotateZ: '90deg'}]}}>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FFA172" bottomColor="#E71F1F" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#C1FF6A" bottomColor="#28C16A" newRound={1} />
                    </AnimatedBox>
                </Box>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#C1FF6A" bottomColor="#28C16A" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FFA172" bottomColor="#28C16A" newRound={1} />
                    </AnimatedBox>
                </Box>
            </Box>
            <Box position="absolute" flexDirection="row" alignItems="center" justifyContent="space-between" width={ScreenWidth / 1.5} height={ScreenWidth / 1.5} style={{transform: [{rotateZ: '45deg'}]}}>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FF4DDB" bottomColor="#E6187F" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#72ECFF" bottomColor="#1B72FF" newRound={1} />
                    </AnimatedBox>
                </Box>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#72ECFF" bottomColor="#1B72FF" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FF4DDB" bottomColor="#E6187F" newRound={1} />
                    </AnimatedBox>
                </Box>
            </Box>
            <Box position="absolute" flexDirection="row" alignItems="center" justifyContent="space-between" width={ScreenWidth / 1.5} height={ScreenWidth / 1.5} style={{transform: [{rotateZ: '135deg'}]}}>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FF4DDB" bottomColor="#E6187F" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#72ECFF" bottomColor="#1B72FF" newRound={1} />
                    </AnimatedBox>
                </Box>
                <Box flexDirection="row" g="sm">
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#72ECFF" bottomColor="#1B72FF" newRound={1} />
                    </AnimatedBox>
                    <AnimatedBox height={ScreenWidth / 12} width={ScreenWidth / 12} borderRadius="xxxxl" overflow="hidden">
                        <Ball topColor="#FF4DDB" bottomColor="#E6187F" newRound={1} />
                    </AnimatedBox>
                </Box>
            </Box>
            <Box position="absolute">
                <Text variant="H5Semi" color="Success">Loading</Text>
            </Box>
        </Box>
    );
};
