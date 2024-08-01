import React, { useState } from "react";
import { KeyboardAvoidingView, View, TextInput, Alert } from "react-native"; else {
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from "../../Navigations/login.navigation";
export interface IAuthenticate {
  email?: string;
  password?: string;
}
export function Login({ navigation }: LoginTypes) {
  const [data, setData] = useState<IAuthenticate>();
  if (data?.email && data.password) {
    console.log(data)
  } else {
    Alert.alert("Preencha todos os campos");
  }
  function handleCadastrar(){
    navigation.navigate("cadastrar")
  }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item})
  }
}

}

