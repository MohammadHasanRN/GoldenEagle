import React from "react";
import { Image, ImageSourcePropType } from "react-native";

import { Box } from "@Theme";

interface Props {
    card: ImageSourcePropType;
  }
  
export const FlippedContent: React.FC<Props> = ({ card }) => {
    return (
        <Box flex={1}>
            <Image source={card} style={{width: '100%', height: '100%'}} />
        </Box>
    );
};