import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

function App() {
  const [numero, setNumero] = useState();
  const [numero2, setNumero2] = useState();
  const [result, setResult] = useState();
  let numerof = parseFloat(numero);
  let numero2f = parseFloat(numero2);

  if (result == isNaN) {
    setResult("Faça uma operação para mostrar o resultado");
  }

  const soma = () => {
    return numerof + numero2f;
  };
  const sub = () => {
    return numerof - numero2f;
  };
  const div = () => {
    return numerof / numero2f;
  };
  const multi = () => {
    return numerof * numero2f;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputbox3} color="white">
          Calculadora da Aninha (^3^)/
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Primeiro número"
          onChangeText={(value) => setNumero(value)}
          value={numero}
          autoFocus={true}
          style={styles.inputbox}
          placeholderTextColor="gray"
        ></TextInput>
      </View>

      <View>
        <TextInput
          placeholder="Segundo numero"
          onChangeText={(value) => setNumero2(value)}
          value={numero2}
          autoFocus={true}
          style={styles.inputbox}
          placeholderTextColor="gray"
        ></TextInput>
      </View>

      <View style={styles.Botao}>
        <View style={styles.button}>
          <Button
            title={"somar"}
            onPress={() => setResult(soma(numero, numero2))}
            style={styles.button}
            color={"#282828"}
          />
        </View>

        <View style={styles.button}>
          <Button
            title={"subtrair"}
            onPress={() => setResult(sub(numero, numero2))}
            style={styles.button}
            color={"#282828"}
          />
        </View>

        <View style={styles.button}>
          <Button
            title={"dividir"}
            onPress={() => setResult(div(numero, numero2))}
            style={styles.button}
            color={"#282828"}
          />
        </View>

        <View style={styles.button}>
          <Button
            title={"multiplicar"}
            onPress={() => setResult(multi(numero, numero2))}
            style={styles.button}
            color={"#282828"}
          />
        </View>
      </View>

      <View>
        <Text style={styles.inputbox2} placeholder="teste">
          {"Resultado: " + result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 30,
    color: "pink"
  },

  inputbox: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#282828",
    borderRadius: 20,
    borderColor: "#b3b3b3",
    color: "white"
  },

  inputbox2: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    color: "white"
  },

  inputbox3: {
    width: 300,
    padding: 10,
    borderColor: "#b3b3b3",
    color: "white"
  },

  Botao: {
    width: 100,
    borderRadius: 100,
    flexDirection: "row",
    borderWidht: 2,
    borderColor: "black"
  },

  button: {
    padding: 5
  }
});

export default App;
