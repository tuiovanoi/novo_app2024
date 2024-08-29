import React from 'react';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from "../styles/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TabNavigation } from "./tab.navigation";
import { Camera } from '../screens/Camera';
import { Imagens } from '../screens/Imagens';

type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
            options={{
                drawerLabel: 'Perfil',
                headerTitle: 'Perfil',
                drawerIcon: () => (
                    <Ionicons name="person" size={24} color={colors.white} />
                ),
        }}/>
            <Drawer.Screen name='Camera' component={Camera}
            options={{
                drawerIcon: () => (
                    <Ionicons name="camera" size={24} color={colors.white} />
                ),
        }} />
            <Drawer.Screen name='Imagem' component={Imagens}
            options={{
                drawerIcon: () => (
                    <FontAwesome name="picture-o" size={24} color={colors.white} />
                ),
        }} />
        </Drawer.Navigator>
    )
}
