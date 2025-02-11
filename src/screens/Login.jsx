import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, Image, StyleSheet, Alert } from "react-native";

export default function Login ({navigation}) {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(true);

    function login(cpf, senha) {
        if (cpf === "12345678900" && senha === "123456") {
            Alert.alert("Sucesso", "Login realizado com sucesso!");
            navigation.navigate("Home");
        } else {
            Alert.alert("Erro", "CPF ou senha inválidos!");
        }
    } // Simulação. A logica real de login deve ser feita no backend.

    return (
        <View style={styles.container}>

            {/* CPF */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu CPF"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                />
            </View>

            {/* Senha */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            {/* Lembrar Senha */}
            <View style={styles.switchContainer}>
                <Switch value={lembrar} onValueChange={setLembrar} />
                <Text style={styles.switchText}>Lembrar</Text>
            </View>

            {/* Esqueceu a senha */}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            {/* Botões */}
            <TouchableOpacity onPress={() => login(cpf, senha)} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={[styles.button, styles.buttonSecondary]}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#efefef",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: '80%',
        height: '80%',
    },
    inputContainer: {
        width: "100%",
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#181818",
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    switchText: {
        marginLeft: 10,
        fontSize: 14,
    },
    forgotPassword: {
        fontSize: 12,
        color: "#007aff",
        marginBottom: 20,
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#ea454c",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonSecondary: {
        backgroundColor: "#aaa",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})
