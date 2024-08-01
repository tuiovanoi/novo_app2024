import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import styles from "./styles";
export interface IBInterface extends TouchableOpacityProps{
  onPress: () => void
  title: string
  type: 'primary' | 'secondary' | 'third'
}

export function Button({ onPress, title, type, ...rest }: IBInterface) {
  return (
    <TouchableOpacity
      style={
        type == "primary"
          ? styles.buttonGreen
          : type == "third"
          ? styles.buttonOrange
          : styles.buttonPurple
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}