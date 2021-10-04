import * as React from "react";
import Topbar from "../components/Topbar";
import { StatusBar } from "expo-status-bar";
import { COLOURS } from "../lib/colors/colors";
import { StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <View>
                <Topbar
                    text="Toolkit"
                    onIconClick={() => navigation.toggleDrawer()}
                />
            </View>
        </React.Fragment>
    );
};

export default Home;
