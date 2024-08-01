import React from "react";
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Cadastrar } from "../screens/Cadastrar";

type LoginParamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginParamList,'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginParamList>()
  return (
    <Stack.Navigator id='login' screenOptions={{ headerShown: false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastrar' component={Cadastrar} />
    </Stack.Navigator>
  )
}