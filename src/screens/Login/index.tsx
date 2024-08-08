import React, { useState } from "react";
import { KeyboardAvoidingView, View, TextInput, Alert, Text } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ButtonInterface } from '../../components/ButtonInterface';
import { LoginTypes } from "../../Navigations/login.navigation";
export interface IAuthenticate {
  email?: string;
  password?: string;
}
export function Login({ navigation }: LoginTypes) {
  const [data, setData] = useState<IAuthenticate>();
  async function handleSignIn() {
    if (data?.email && data.password) {
      console.log(data)
    } else {
      Alert.alert("Preencha todos os campos");
    }
  }
  function handleCadastrar() {
    navigation.navigate("Login")
  }
  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item })
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formRow}>
          <MaterialIcons name="email" style={styles.icon} />
          <TextInput
            placeholderTextColor={colors.third}
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange({ email: i })}
          />
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              placeholderTextColor={colors.third}
              style={styles.input}
              placeholder="senha"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ password: i })}
            />
          </View>
          <ButtonInterface title='login' type='primary' onPressI={handleSignIn} />
          <ButtonInterface title='cadastre-se' type='secondary' onPressI={handleCadastrar} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}