import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";


interface Props {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
}

const IconButton = ({ icon, label, onPress }: Props) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Ionicons name={icon} size={24} color={'#fff'} />
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    )
}
export default IconButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        color: '#fff',
        marginTop: 12,
    }
})