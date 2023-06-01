import { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';


const Start = ({ navigation }) => {
    const [textinput, setTextinput] = useState('');
    const [setColor] = useState('');


    return (
        <ImageBackground
            source={require('../assets/img-bg.jpg')}
            style={[styles.container, styles.image]}>

            <View style={styles.container}>
                <View style={styles.appTitle}>

                    <Text
                        style={styles.appTitle}
                    >Chat App</Text>
                </View>

                <TextInput
                    style={styles.textInput}
                    value={textinput}
                    onChangeText={setTextinput}
                    placeholder='Type your username here'
                />

                <View>
                    <View style={styles.radioButtonContainer}>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "red" }]}
                            onPress={() => setColor("red")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "blue" }]}
                            onPress={() => setColor("blue")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "green" }]}
                            onPress={() => setColor("green")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "yellow" }]}
                            onPress={() => setColor("yellow")}
                        ></TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.buttonContainer}
                            title="Go to Chat"
                            onPress={() => navigation.navigate('Chat', { textinput: textinput })}
                        />

                    </View>
                </View>



            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitle: {
        color: 'white',
        fontSize: 42,
    },

    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        opacity: 0.5,

    },
    image: {

        alignItems: 'center'

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
    buttonContainer: {
        backgroundColor: 'black',
        padding: 10,

    },

});

export default Start;