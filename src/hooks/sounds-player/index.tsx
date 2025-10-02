import Sound from 'react-native-sound';
import { AppState } from 'react-native';
import { useRef, useCallback, useEffect } from 'react';

import { useEffects } from '@Store';

export const useSoundPlayer = () => {
    const currentSoundRef = useRef<Sound | null>(null);

    const playSound = useCallback((sound: string) => {
        const {getState} = useEffects;

        const currentSoundsEnabled = getState().soundsEnabled;

        if(!currentSoundsEnabled || AppState.currentState !== 'active')
            return;

        if (currentSoundRef.current) {
            currentSoundRef.current.stop();
            currentSoundRef.current.release();
            currentSoundRef.current = null;
        }

        const soundEffect = new Sound(sound, Sound.MAIN_BUNDLE, error => {
            if (error) {
                return;
            }
            
            soundEffect.setVolume(1).play((success) => {
                if (!success) {
                    return;
                }
                soundEffect.release();
                if (currentSoundRef.current === soundEffect) {
                    currentSoundRef.current = null;
                }
            });
        });

        currentSoundRef.current = soundEffect;
    }, []);

    useEffect(() => {
        return () => {
            if (currentSoundRef.current) {
                currentSoundRef.current.stop();
                currentSoundRef.current.release();
                currentSoundRef.current = null;
            }
        };
    }, []);

    return {
        playSound
    };
};
