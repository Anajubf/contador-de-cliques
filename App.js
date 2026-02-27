import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => { setContador(contador + 1); }
  const decrementar = () => { setContador(contador - 1); }
  const reset = () => { setContador(0); }

  return (
<View style={styles.container}>
    <Text style={styles.titulo}>Contador Digital</Text>
    <Text style={styles.numero}>{contador} </Text>

    <View style={styles.linhaDeBotoes}>
        <TouchableOpacity style={styles.botaoMais} onPress={decrementar}>
            <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenos} onPress={incrementar}>
             <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoReset} onPress={reset}>
             <Text style={styles.textoBotao}>reset</Text>
        </TouchableOpacity>
    </View>
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
  titulo: {
    fontSize: 30,
    color: '#240177',
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#240177',
  },
  linhaDeBotoes: {
   flexDirection: 'row',
   marginTop: 20,
  },
  botaoMais: {
    backgroundColor: 'rgb(195, 158, 255)',
    padding: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  botaoMenos: {
    backgroundColor: '#975bdb',
    padding: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  botaoReset: {
    backgroundColor: '#c7c7ca',
    padding: 15,
    marginRight: 10,
    borderRadius: 5,
  }
});
