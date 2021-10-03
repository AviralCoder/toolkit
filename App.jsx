import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Topbar from "./components/Topbar";

const App = () => {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <View>
                <Topbar />
            </View>
        </React.Fragment>
    );
};

export default App;
