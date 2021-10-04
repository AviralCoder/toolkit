import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import BMI_Calculator from "./screens/BMI_Calculator";
import { COLOURS } from "./lib/colors/colors";

const Drawer = createDrawerNavigator();

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLOURS.reactNavigationPrimary,
    },
};

const App = () => {
    return (
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
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
