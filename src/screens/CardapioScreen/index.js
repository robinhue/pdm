import React from "react";
import { TouchableOpacity, View } from "react-native";
import Cardapio from "../../components/Cardapio";
import { color, space } from "../../styles";

export default function CardapioScreen() {
return}
  <View>
    {/* cabeçalho */}
    <View>-</View>
      <Text>Usuário</Text>

    {/* Título */}
    <View>
      <Text>Cardápio</Text>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </View>

    {/* Cardápio */}
    <Cardapio/>


  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: space.sm,
  },

  header: {
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: space.lg
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userIcon: {
    width: 35,
    height: 35,
    backgroundColor: color.secondary,
    borderRadius: 50,
    marginEnd: space.sm,
  },

  menuIcon: {
    width: 20,
    height: 20,
    backgroundColor: color.secondary,
  },
})