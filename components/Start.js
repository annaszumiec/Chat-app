import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
    KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";
import { Alert } from "react-native";

const Start = ({ navigation }) => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    const auth = getAuth();
    const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

    const signInUser = () => {
        signInAnonymously(auth)
            .then((result) => {
                navigation.navigate("Chat", {
                    userID: result.user.uid,
                    name: text ? text : "User",
                    color: color ? color : "white",
                });
                Alert.alert("Signed in successfully!");
            })
            .catch((error) => {
                Alert.alert("Unable to sign in, try again later.");
            });
    };

    return (
        <ImageBackground
            source={require("../assets/Background-Image.png")}
            resizeMode='cover'
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Chat App!</Text>
                </View>

                <View style={styles.subContainer}>
                    <TextInput
                        placeholder='Your name'
                        style={styles.input}
                        onChangeText={setText}
                    />

                    <Text>Choose Background Color</Text>
                    <View style={styles.radioButtonContainer}>
                        {colors.forEach(c =>
                            <TouchableOpacity
                                style={[styles.radioButton, { backgroundColor: c }]}
                                onPress={() => setColor(c)}
                            ></TouchableOpacity>
                        )}
                    </View>
                    <TouchableOpacity style={[styles.button, styles.shadowProp, styles.text]} onPress={signInUser}>
                        <Text
                            style={styles.text}
                        >Start chatting</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {Platform.OS === "ios" ? (
                <KeyboardAvoidingView behavior='padding' />
            ) : null}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "bottom",
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "88%",


    },
    radioButtonContainer: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20,

    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
    },
    button: {
        alignItems: "center",
        padding: 15,
        borderRadius: 2,
        backgroundColor: '#757083',
        width: "85%",
        margin: 10,
    },
    text: {
        color: 'white',
        fontWeight: 600,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },

    radioButton: {
        backgroundColor: "black",
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    input: {
        height: 40,
        width: "88%",
        margin: 12,

        padding: 10,
        backgroundColor: "white"
    },
});

export default Start;
