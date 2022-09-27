import React from "react";
import {
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { color, font, form, space } from "../../styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Bem vindo de volta</Text>

      {/* Input: Login*/}
      <View style={form.control}>
        <Text style={form.label}>Login</Text>
        <TextInput style={form.input}/>
      </View>

      {/* Input: Password */}
      <View style={form.control}>
        <Text style={form.label}>Password</Text>
        <TextInput style={form.input}/>
      </View>

      {/* Botôes */}
      <View>
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar nova conta</Text>
        </TouchableOpacity>
      </View>

      {/* Esqueci a senha */}
      <View>
        <Text>Esqueceu a senha?</Text>
        <TouchableOpacity>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.dark,
    padding: space.sm,
  },

  title: {
    fontSize: font.size.xl,
    fontWeight: "bold",
  },
  header: {
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: space.lg
  },
  subtitle: {
    fontSize: font.size.md,
    color: color.secondary,
  },
  btn: {
    backgroundColor: color.primary,
    padding: space.sm,
    borderRadius: 4,
    marginRight: space.sm,
  },
  btnText: {
    color: 'white',
  },
  btnOutline: {
    padding
  },




});
