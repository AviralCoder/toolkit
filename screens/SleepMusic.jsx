import { Button, Portal, Provider } from "react-native-paper";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import Constants from "expo-constants";
import { COLOURS } from "../lib/colors/colors";

export default function SleepMusic({ navigation }) {
    return (
        <>
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor={COLOURS.primary} />
            ) : (
                <StatusBar style="auto" />
            )}

            <Topbar
                text="Sleep Music"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body></Body>
        </>
    );
}
