import { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

const Start = ({ navigation }) => {
    const [textinput, setTextinput] = useState("");
    const [setColor] = useState("");

    return (
        <ImageBackground
            source={require("../assets/Background-Image.png")}
            style={[styles.container, styles.image]}
        >
            <View style={styles.container}>
                <View style={styles.appTitle}>
                    <Text style={styles.appTitle}>Chat App</Text>
                </View>

                <TextInput
                    style={styles.textInput}
                    value={textinput}
                    onChangeText={setTextinput}
                    placeholder="Type your username here"
                />

                <View>
                    <View style={styles.text}>
                        <Text style={styles.text}>Choose Background Color :</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#090C08" }]}
                            onPress={() => setColor("#090C08")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#474056" }]}
                            onPress={() => setColor("#474056")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#8A95A5" }]}
                            onPress={() => setColor("#8A95A5")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#B9C6AE" }]}
                            onPress={() => setColor("#B9C6AE")}
                        ></TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.buttonContainer}
                            title="Start chatting"
                            onPress={() =>
                                navigation.navigate("Chat", { textinput: textinput })
                            }
                        />
                        {Platform.OS === "ios" ? (
                            <KeyboardAvoidingView behavior="height" />
                        ) : null}
                    </View>
                </View>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    appTitle: {
        color: "white",
        fontSize: 45,
    },
    text: {
        fontSize: 16,
    },

    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
        opacity: 0.5,
    },
    image: {
        alignItems: "center",
    },

    radioButtonContainer: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20,
    },
    radioButton: {
        backgroundColor: "black",
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    button: {
        color: "white",
        backgroundColor: "#757083",
        padding: 10,
    },
});

export default Start;
