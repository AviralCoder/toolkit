import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Surface, TextInput } from "react-native-paper";

const LetterTest = ({
    instruction,
    letter,
    size,
    buttonText,
    inputLabel,
    onButtonPress,
    inputTxt,
    onInputChange,
}) => (
    <React.Fragment>
        <Surface style={styles.container}>
            <Text style={styles.instruction}>{instruction}</Text>

            <Text style={{ ...styles.word, fontSize: size }}>{letter}</Text>
        </Surface>

        <TextInput
            mode="outlined"
            label={inputLabel}
            style={styles.textInput}
            value={inputTxt}
            onChangeText={onInputChange}
            onSubmitEditing={() => {
                onButtonPress();
            }}
        />

        <Button mode="contained" style={styles.button} onPress={onButtonPress}>
            {buttonText}
        </Button>
    </React.Fragment>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    instruction: {
        marginBottom: 20,
        fontFamily: "MontserratRegular",
        fontSize: 20,
    },
    word: {
        fontFamily: "MontserratRegular",
    },
    textInput: {
        margin: 20,
    },
    button: {
        marginHorizontal: 20,
    },
});

export default LetterTest;
