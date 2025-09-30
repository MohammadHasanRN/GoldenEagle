import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Main Stack
export type MainStackRoutes = {
    Menu: undefined;
    Main: {level: number};
}
export interface MainStackNavigationProps<RouteName extends keyof MainStackRoutes> {
    navigation: StackNavigationProp<MainStackRoutes, RouteName>;
    route: RouteProp<MainStackRoutes, RouteName>;
}
