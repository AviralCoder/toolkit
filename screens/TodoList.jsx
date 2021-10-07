import * as React from "react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import { Provider, TextInput, Button, Snackbar } from "react-native-paper";
import Body from "../layout/Body";
import ListItem from "../components/ListItem";
import { Alert, View, Text, ScrollView } from "react-native";
import { COLOURS } from "../lib/colors/colors";

const TodoList = ({ navigation }) => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");

    const handleDelete = (todoToBeDeleted) => {
        Alert.alert("Do you want to delete this?", todoToBeDeleted.text, [
            {
                text: "Yes!",
                onPress: () => {
                    const filtered_array = todos.filter(
                        (elem) => todoToBeDeleted !== elem
                    );
                    setTodos(filtered_array);
                    setSnackbarText("Todo deleted!");
                    setSnackbarVisible(true);
                },
            },
            {
                text: "No!",
                onPress: () => {
                    setSnackbarText("Not deleting todo.");
                    setSnackbarVisible(true);
                },
            },
        ]);
    };

    return (
        <Provider>
            <Topbar
                text="Todo List"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                <ScrollView>
                    <TextInput
                        label="Type your todo.."
                        value={todoText}
                        onChangeText={(text) => setTodoText(text)}
                        style={{ marginHorizontal: 20 }}
                        mode="outlined"
                    />

                    <Text
                        style={{
                            marginHorizontal: 20,
                            textAlign: "center",
                            marginTop: 10,
                            color: COLOURS.primary,
                            fontWeight: "bold",
                        }}
                    >
                        Please enter a small text to prevent dis-layouting of
                        the app. For long todos, put them into different points
                    </Text>

                    <Button
                        icon="plus"
                        mode="contained"
                        style={{ marginHorizontal: 20, marginTop: 20 }}
                        onPress={() => {
                            if (todoText !== "") {
                                setTodos([
                                    ...todos,
                                    { text: todoText, key: Date.now() },
                                ]);
                                setTodoText("");
                            } else {
                                setSnackbarText("Please type something.");
                                setSnackbarVisible(true);
                            }
                        }}
                    >
                        Add
                    </Button>

                    <View style={{ marginTop: 20 }}>
                        {todos.map((elem) => (
                            <React.Fragment key={elem.key}>
                                <ListItem
                                    text={elem.text}
                                    onDeletePress={() => handleDelete(elem)}
                                />
                            </React.Fragment>
                        ))}
                    </View>
                </ScrollView>
            </Body>

            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => {
                    setSnackbarVisible(false);
                }}
                action={{
                    label: "OK",
                    onPress: () => {
                        setSnackbarVisible(false);
                    },
                }}
            >
                {snackbarText}
            </Snackbar>
        </Provider>
    );
};

export default TodoList;
