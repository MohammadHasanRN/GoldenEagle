import { ImageSourcePropType } from "react-native";

export interface CardType {
    id: number;
    image: ImageSourcePropType;
    isFlipped: boolean;
    isMatched: boolean;
}