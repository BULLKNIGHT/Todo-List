/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTodoListManager } from "../context/TodoListProvider";
import { TodoItem } from "./TodoItem";
import { List, ListItem } from "@mui/material";

const listStyle = css`
    height: 88%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 20px;
    }
`;

export function TodoList() {
    const { todoList } = useTodoListManager();

    return (
        <List css={listStyle}>
            {
                todoList.map((todo, index) =>
                    <ListItem key={index}>
                        <TodoItem index={index} item={todo} />
                    </ListItem>
                )
            }
        </List>
    );
}
