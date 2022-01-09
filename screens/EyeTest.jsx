import * as React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import { Text, StyleSheet } from "react-native";
import { Button, Portal, Provider, Dialog } from "react-native-paper";
import { useState, useEffect } from "react";
import { COLOURS } from "../lib/colors/colors";
import LetterTest from "../components/LetterTest";
import { WORDS } from "../lib/constants/constants";
import * as Clipboard from "expo-clipboard";

const EyeTest = ({ navigation }) => {
    const [state, setState] = useState({
        started: false,
        word: "LIFE",
        input: "",
        score: 0,
        size: 20,
        resultsShown: false,
    });
    const [result, setResult] = useState("");

    useEffect(() => {
        const { score } = state;

        if (state.resultsShown === true) {
            if (score <= 3) {
                setResult(`You scored ${score}. You have a weak eyesight`);
            }
            if (score > 3 && score <= 6) {
                setResult(`You scored ${score}. You have a good eyesight`);
            }
            if (score > 6 && score <= 8) {
                setResult(
                    `You scored ${score}. You have an excellent eyesight`
                );
            }
        }
    }, [state.resultsShown]);

    const choose = () => {
        const random = WORDS[Math.floor(Math.random() * WORDS.length - 1)];
        setState({
            ...state,
            word: random,
            input: "",
            score: state.score + 1,
            size: state.size > 6 ? state.size - 2 : 2,
        });
    };

    const check = () => {
        if (state.word === state.input.toUpperCase()) {
            if (state.score === 8) {
                setState({ ...state, resultsShown: true });
            } else {
                choose();
            }
        } else {
            setState({ ...state, resultsShown: true });
        }
    };

    const start = () => {
        setState({
            ...state,
            started: true,
        });
    };

    return (
        <Provider>
            {/* conditional rendering over here so that the status bar looks good on android device and the android emulator as well .. */}
            {Constants.isDevice ? (
                <StatusBar
                    style="auto"
                    backgroundColor={COLOURS.primary}
                    barStyle="light-content"
                />
            ) : (
                <StatusBar style="auto" />
            )}

            <Topbar
                text="Eye Test"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                {!state.started && (
                    <React.Fragment>
                        <Text style={styles.heading}>
                            This is a very simple eye testing app, we will show
                            you letters on the screen, and they will keep on
                            getting smaller. The moment you give the wrong
                            letter, the test will stop and we will show you the
                            result. Put the mobile phone from a little distance
                            from your eyes. But please do not refer to this as
                            your final answer and consult a doctor.
                        </Text>

                        <Button
                            mode="contained"
                            style={styles.startBtn}
                            onPress={start}
                        >
                            Start
                        </Button>
                    </React.Fragment>
                )}

                {state.started && (
                    <LetterTest
                        letter={state.word}
                        instruction="What is the word shown here"
                        size={state.size}
                        inputLabel="Enter the word"
                        buttonText="Check"
                        onButtonPress={check}
                        inputTxt={state.input}
                        onInputChange={(text) => {
                            setState({ ...state, input: text });
                        }}
                    />
                )}
            </Body>

            <Portal>
                <Dialog
                    visible={state.resultsShown}
                    onDismiss={() => {
                        setState({
                            started: false,
                            word: "LIFE",
                            input: "",
                            score: 0,
                            size: 20,
                            resultsShown: false,
                        });
                    }}
                    style={{ zIndex: 9999 }}
                >
                    <Dialog.Title>Results</Dialog.Title>
                    <Dialog.Content>
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: "center",
                            }}
                        >
                            {result}
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            onPress={() => {
                                setState({
                                    started: false,
                                    word: "LIFE",
                                    input: "",
                                    score: 0,
                                    size: 20,
                                    resultsShown: false,
                                });
                            }}
                        >
                            Restart
                        </Button>

                        <Button
                            onPress={() => {
                                Clipboard.setString(result);
                                setState({
                                    started: false,
                                    word: "LIFE",
                                    input: "",
                                    score: 0,
                                    size: 20,
                                    resultsShown: false,
                                });
                            }}
                        >
                            Copy
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 15,
        textAlign: "center",
        marginHorizontal: 20,
        fontFamily: "MontserratBold",
    },
    startBtn: {
        marginTop: 20,
        fontFamily: "MontserratRegular",
        marginHorizontal: 20,
    },
});

export default EyeTest;
