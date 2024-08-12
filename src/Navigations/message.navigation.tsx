import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { CadMensagem } from '../screens/CadMensagem'
import { Mensagem } from '../screens/Mensagem'
import React from 'react' 
type MessageStackParamList = {
    Mensagem: undefined
    CadMensagem: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Mensagem'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Mensagem' component={Mensagem} />
            <Stack.Screen name='CadMensagem' component={CadMensagem} />
        </Stack.Navigator>
    )
}