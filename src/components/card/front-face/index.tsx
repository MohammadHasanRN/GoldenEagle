import React from "react";
import { Image } from "react-native";

import { Box } from "@Theme";

export const RegularContent = () => {
    return (
        <Box flex={1}>
            <Image source={require('@Assets/images/cards/black_joker.png')} style={{width: '100%', height: '100%'}} />
        </Box>
    );
};