import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Linking, Alert } from "react-native";
import { GITHUB_URL, PRIVACY_LINK } from "../lib/constants/constants";
import Constants from "expo-constants";

const Topbar = ({ text, onIconClick }) => {
    return (
        <Appbar style={styles.top}>
            <Appbar.Action icon="menu" onPress={onIconClick} />

            <Appbar.Content title={text} titleStyle={styles.title} />

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

            <Appbar.Action
                icon="card-text-outline"
                onPress={() => {
                    Linking.openURL(PRIVACY_LINK).catch((err) => {
                        Alert.alert(
                            "Fail",
                            `Opening the privacy policy failed - ${err}`,
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
    title: {
        fontFamily: "MontserratRegular",
    },
});

export default Topbar;
