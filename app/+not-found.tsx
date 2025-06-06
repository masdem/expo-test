import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops! Not Found' }} />
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        <Text style={styles.text}>Go back to Home screen</Text>
      </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});