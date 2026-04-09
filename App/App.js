import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

// Componente Cabeçalho
function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Brasao_do_Brasil.svg/1200px-Brasao_do_Brasil.svg.png' }}
        style={styles.imagem}
      />
      <Text style={styles.tituloCabecalho}>Meu App</Text>
    </View>
  );
}

// Componente Corpo
function Corpo() {
  const handlePress = () => {
    Alert.alert('Olá');
  };

  return (
    <View style={styles.corpo}>
      <Text style={styles.tituloCorpo}>TouchableHighlight</Text>

      <TouchableHighlight
        style={styles.botao}
        onPress={handlePress}
        underlayColor="#aaa"
      >
        <Text style={styles.textoBotao}>CLIQUE AQUI</Text>
      </TouchableHighlight>
    </View>
  );
}

// App principal
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => Alert.alert('Olá')}
        style={{ backgroundColor: '#ddd', padding: 20 }}
      >
        <Text>CLIQUE AQUI</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    backgroundColor: '#8B0000', // vermelho escuro
    padding: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  tituloCabecalho: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloCorpo: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
  },
  textoBotao: {
    fontWeight: 'bold',
  },
});