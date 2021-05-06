import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


export default function App() {
  const [ status, setStatus ] = useState(false);

  return (
    <View style={styles.container}>
      <Text> Switch </Text>

      <Switch 
      //valor que esta no momento (ligado ou desligado)
        value={status}
        //toda vez que alterar
        onValueChange={ (valorSwitch)=>setStatus(valorSwitch)  }
        thumbColor="#ff0000"

      />

      <Text> O valor atual é: {(status) ? "ativo" : "inativo"} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
