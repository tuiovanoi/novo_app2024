import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { ScreenSlide1, ScreenSlide2 } from '../screens';

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={ScreenSlide1} />
            <Stack.Screen name="Slide2" component={ScreenSlide2} />
        </Stack.Navigator>
    );
}