import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Linking, Alert } from "react-native";
import { GITHUB_URL } from "../lib/constants/constants";
import Constants from "expo-constants";

const Topbar = () => {
    return (
        <Appbar style={styles.top}>
            <Appbar.Action icon="menu" onPress={() => {}} />

            <Appbar.Content title="Toolkit" />

            <Appbar.Action
                icon="github"
                onPress={() => {
                    Linking.openURL(GITHUB_URL).catch((err) => {
                        Alert.alert(
                            "Fail",
                            `Opening the github repo failed - ${err}`,
                            [
                                {
                                    text: "Okay",
                                },
                            ]
                        );
                    });
                }}
            />
        </Appbar>
    );
};

const styles = StyleSheet.create({
    top: {
        position: "absolute",
        left: 0,
        right: 0,
        top: Constants.statusBarHeight,
    },
});

export default Topbar;
