import * as React from "react";
import { Stylesheet, Text, View } from "react-native";
import { Button, Portal, Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/Topbar";
import Body from "../layout/Body";
import { COLOURS } from "../lib/colors/colors";
import Constants from "expo-constants";

export default function UnitConversion({ navigation }) {
    return (
        <Provider>
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor={COLOURS.primary} />
            ) : (
                <StatusBar style="auto" />
            )}

            <Topbar
                text="Unit Conversion"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                <Text>Eat shit lol.</Text>
            </Body>
        </Provider>
    );
}
