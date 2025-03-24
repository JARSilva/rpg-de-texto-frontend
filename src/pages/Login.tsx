import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>[LOGO]</Text>
      <TextInput
          style={styles.input}
          placeholder="Usuário"
        />
      <TextInput
          style={styles.input}
          placeholder="Senha"
        />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    backgroundColor: '#A3E3B1',
    alignItems: 'center', // Centraliza horizontalmente
    padding: 8,
  },
  input: {
    width: '80%', // Define a largura do input
    fontSize: 18, // Tamanho da fonte
    paddingVertical: 10, // Espaçamento interno vertical
    borderBottomWidth: 2, // Cria a linha embaixo
    borderBottomColor: '#007bff', // Cor da linha (azul)
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#244242',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFE8B3',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  logo:{
    fontSize: 24,
  }
});