import * as React from "react";
import Constants from "expo-constants";
import StatusBar from "expo-status-bar";

const StatusBarColor = () => {
    return (
        <React.Fragment>
            {Constants.isDevice ? (
                <StatusBar style="auto" backgroundColor="#6200ee" />
            ) : (
                <StatusBar style="auto" />
            )}
        </React.Fragment>
    );
};

export default StatusBarColor;
