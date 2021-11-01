import * as React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import { Text, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useState } from "react";
import { COLOURS } from "../lib/colors/colors";

const EyeTest = ({ navigation }) => {
    const [state, setState] = useState({
        started: false,
        activityIndicatorVisible: false,
    });

    const start = () => {
        setState({ ...state, activityIndicatorVisible: true, started: true });

        setTimeout(() => {
            setState({
                ...state,
                activityIndicatorVisible: false,
                started: true,
            });
        }, 3000);
    };

    return (
        <>
            {/* conditional rendering over here so that the status bar looks good on android device and the android emulator as well .. */}
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor={COLOURS.primary} />
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
                            result.
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

                <ActivityIndicator
                    animating={state.activityIndicatorVisible}
                    color={COLOURS.primary}
                    size={"large"}
                />
            </Body>
        </>
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
