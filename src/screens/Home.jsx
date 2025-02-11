import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Queluz+"/>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#efefef",
    }
})
