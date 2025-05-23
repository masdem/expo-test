import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";


interface Props {
    onPress?: () => void
}

const CircleButton = ({ onPress }: Props) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Ionicons name="add" size={38} color={'#25292e'} />
            </Pressable>
        </View >
    )
}
export default CircleButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 92,
        height: 92,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 46,
        padding: 3,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})