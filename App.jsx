import * as React from "react";
import { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import BMI_Calculator from "./screens/BMI_Calculator";
import { COLOURS } from "./lib/colors/colors";
import AppLoading from "expo-app-loading";
import loadFonts from "./functions/loadFonts";
import EyeTest from "./screens/EyeTest";
import UnitConversion from "./screens/UnitConversion";

const Drawer = createDrawerNavigator();

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLOURS.primary,
    },
};

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        try {
            loadFonts();
            setFontsLoaded(true);
        } catch (e) {
            console.error(e);
        }
    }, []);

    if (!fontsLoaded) return <AppLoading />;

    return (
        <React.Fragment>
            <NavigationContainer theme={customTheme}>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Drawer.Screen
                        name="BMI"
                        component={BMI_Calculator}
                        options={{ headerShown: false }}
                    />
                    <Drawer.Screen
                        name="Eye Test"
                        component={EyeTest}
                        options={{ headerShown: false }}
                    />
                    <Drawer.Screen
                        name="Unit Conversion"
                        component={UnitConversion}
                        options={{ headerShown: false }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </React.Fragment>
    );
};

export default App;
