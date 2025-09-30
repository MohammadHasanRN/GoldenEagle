import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
    soundsEnabled: boolean;
    setSoundsEnabled: (soundsEnabled: boolean) => void; 

    getInitValues: () => void;
};

export const useEffects = create<State>((set) => ({
    soundsEnabled: true,
    setSoundsEnabled: async (soundsEnabled: boolean) => {
        await AsyncStorage.setItem("soundsEnabled", soundsEnabled.toString());
        set({soundsEnabled});
    },
    
    getInitValues: async() => {
        const soundsEnabled = await AsyncStorage.getItem("soundsEnabled");

        set({
            soundsEnabled: soundsEnabled === 'true' ? true : false,
        })
    },
}));
