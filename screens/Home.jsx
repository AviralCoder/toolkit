import * as React from "react";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import { StatusBar } from "expo-status-bar";
import { COLOURS } from "../lib/colors/colors";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Body from "../layout/Body";
import loadFonts from "../functions/loadFonts";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
    const [homeFontsLoaded, setHomeFontsLoaded] = useState(false);

    useEffect(() => {
        const fontsLoading = async () => {
            try {
                await loadFonts();
                setHomeFontsLoaded(true);
            } catch (e) {}
        };

        fontsLoading();
    }, []);

    if (!homeFontsLoaded) return <AppLoading />;

    return (
        <React.Fragment>
            <StatusBar
                style="auto"
                backgroundColor={COLOURS.primary}
                barStyle="light-content"
            />

            <View style={styles.marginTop}>
                <Topbar
                    text="Toolkit"
                    onIconClick={() => navigation.toggleDrawer()}
                />

                <Body>
                    <Text style={styles.title}>Welcome to Toolkit!</Text>
                </Body>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    marginTop: {
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 25,
        fontWeight: "300",
        textAlign: "center",
        fontFamily: "MontserratRegular",
        marginTop: 20,
    },
});

export default Home;
