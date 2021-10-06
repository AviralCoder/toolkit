import * as React from "react";
import { useState } from "react";
import Topbar from "../components/Topbar";
import { Provider, TextInput, Button } from "react-native-paper";
import Body from "../layout/Body";

const TodoList = ({ navigation }) => {
    const [todoText, setTodoText] = useState("");

    return (
        <Provider>
            <Topbar
                text="Todo List"
                onIconClick={() => navigation.toggleDrawer()}
            />

            <Body>
                <TextInput
                    label="Type your todo.."
                    value={todoText}
                    onChangeText={(text) => setTodoText(text)}
                    style={{ marginHorizontal: 20 }}
                    mode="outlined"
                />

                <Button
                    icon="plus"
                    mode="contained"
                    style={{ marginHorizontal: 20, marginTop: 20 }}
                    onPress={() => {}}
                >
                    Add
                </Button>
            </Body>
        </Provider>
    );
};

export default TodoList;
