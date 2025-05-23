import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";


interface Props {
    label: string
    theme?: 'primary' | 'secondary'
    onPress?: () => void
}

const Button = ({ label, theme, onPress }: Props) => {
    const buttonContainerStyle = theme === 'primary' ? {
        borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18, marginTop: 24,
    } : {}

    const primaryButtonStyle = theme === 'primary' ? { backgroundColor: '#fff' } : {}
    const primaryButtonLabelStyle = theme === 'primary' ? { color: '#25292e' } : {}

    return (
        <View style={[styles.buttonContainer, buttonContainerStyle]}>
            <Pressable style={[styles.button, primaryButtonStyle]} onPress={onPress}>
                {theme === 'primary' && <FontAwesome name="picture-o" size={18} color={'#25292e'} style={styles.buttonIcon} />}
                <Text style={[styles.buttonLabel, primaryButtonLabelStyle]}>{label}</Text>
            </Pressable>
        </View >
    )
}
export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    },
})