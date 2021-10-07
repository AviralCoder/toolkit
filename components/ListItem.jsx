import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
import Constants from "expo-constants";
import { COLOURS } from "../lib/colors/colors";

const ListItem = ({ text, onDeletePress }) => {
    return (
        <View style={styles.todo}>
            <Text>{text}</Text>

            <IconButton
                icon="delete"
                color={COLOURS.primary}
                onPress={onDeletePress}
            >
                DEL
            </IconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        borderBottomColor: COLOURS.todosBorderColour,
        borderBottomWidth: 2,
        padding: 10,
        alignItems: "center",
    },
    deletebutton: {
        marginRight: 20,
    },
    text: {
        marginLeft: 20,
    },
});

export default ListItem;
