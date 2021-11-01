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
            } catch (e) {
                console.error(e);
            }
        };

        fontsLoading();
    }, []);

    if (!homeFontsLoaded) return <AppLoading />;

    return (
        <React.Fragment>
            {/* conditional rendering over here so that the status bar looks good on android device and the android emulator as well .. */}
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor={COLOURS.primary} />
            ) : (
                <StatusBar style="auto" />
            )}

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
