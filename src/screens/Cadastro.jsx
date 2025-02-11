import { Text, View, StyleSheet } from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})