const what_are_you_doing_here = () => (
    // import { Button, Portal, Provider } from "react-native-paper";
    // import { StatusBar } from "expo-status-bar";
    // import Topbar from "../components/Topbar";
    // import Body from "../layout/Body";
    // import Constants from "expo-constants";
    // import { COLOURS } from "../lib/colors/colors";

    <>
        {Constants.isDevice ? (
            <StatusBar style="auto" backgroundColor={COLOURS.primary} />
        ) : (
            <StatusBar style="auto" />
        )}

        <Topbar text="Eye Test" onIconClick={() => navigation.toggleDrawer()} />

        <Body></Body>
    </>
);
