import { Text, View, StyleSheet } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
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