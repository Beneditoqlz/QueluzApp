import React from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity, View, Image, Dimensions, Text } from 'react-native';

export default function LoginScreen() {
  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = () => {
    console.log('CPF:', cpf, 'Senha:', senha);
  };

  const { height, width } = Dimensions.get('window');

  return (
    <View style={[styles.container, { height, width }]}>
      {  }
      <Image
        source={require('./assets/logogestao.png')}  
        style={styles.logo}
      />

      <View style={styles.formContainer}>
        { }
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />

        { }
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        { }
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonc} onPress={handleLogin}>
        <Text style={styles.buttonTextc}>Cadastro</Text>
      </TouchableOpacity>
      
      </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#ebdec6', 
  },
  rodape: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain',
  },
  logo: {
    width: 300, 
    height: 200
    , 
    resizeMode: 'contain',
    position: 'absolute', 
    top: 130, 
    zIndex: 1, 
  },
  formContainer: {
    width: '90%',
    paddingVertical: 80, 
    elevation: 5, 
    marginTop: 280, 
  },
  button: {
    backgroundColor: '#a13c05', 
    paddingVertical: 15,
    width: '100%', 
    borderRadius: 35, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderColor: '#a13c05',
    borderWidth: 2,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonc: {
    backgroundColor: '#f67203', 
    marginTop: 25,
    paddingVertical: 15,
    width: '100%', 
    borderRadius: 35, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderColor: '#f67203',
    borderWidth: 2,
    justifyContent: 'center', 
    alignItems: 'center',
  },
   
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    width: '100%', 
  },
  buttonTextc: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    width: '100%', 
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
