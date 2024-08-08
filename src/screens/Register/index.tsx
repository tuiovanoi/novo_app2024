import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ButtonInterface } from '../../components/ButtonInterface'
import { LoginTypes } from '../../navigation/login.navigation';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}
export function Register({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    async function handleRegister() {
        if (data?.email && data.name && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleGoBack() {
        navigation.navigate('Login')
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item });
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastre-se</Text>
            <View style={styles.formRow}>
                <Ionicons name="person" style={styles.icon} />
                <TextInput
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={(i) => handleChange({ email: i })}
                />
            </View>
            <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange({ email: i })}
                />
            </View>
            <View style={styles.formRow}>
                <Entypo name="key" style={styles.icon} />
                <TextInput
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(i) => handleChange({ password: i })}
                />
            </View>
            <ButtonInterface title='Salvar' type='secondary' onPressI={handleRegister} />
            <ButtonInterface title='Voltar' type='primary' onPressI={handleGoBack} />
            </KeyboardAvoidingView>
        </View>
    )
}