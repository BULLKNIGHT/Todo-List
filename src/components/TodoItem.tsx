/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment, useState } from "react";
import { useTodoListManager } from "../context/TodoListProvider";
import { EditItem } from "./EditItem";
import { IconButton } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
    item: string,
    index: number,
}

const listItemStyle = css`
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
    align-items: center;
    gap: 15px;
    div {
        display: flex;
        word-break: break-all;
    }
    :hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

export const TodoItem: React.FC<TodoItemProps> = ({ item, index }) => {
    const { updateTodo, deleteTodo } = useTodoListManager();
    const [isEditModeOn, setIsEditModeOn] = useState(false);

    const saveHandler = (index: number, updatedTodo: string) => {
        updateTodo(index, updatedTodo);
        setIsEditModeOn(false);
    }

    return (
        <div css={listItemStyle}>
            {isEditModeOn ?
                <EditItem
                    item={item}
                    index={index}
                    saveHandler={saveHandler}
                    cancelHandler={() => setIsEditModeOn(false)}
                /> :
                <Fragment>
                    <div>
                        <DoubleArrowIcon />
                        <span>{item}</span>
                    </div>
                    <div>
                        <IconButton onClick={() => setIsEditModeOn(true)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => deleteTodo(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </Fragment>
            }
        </div>
    );
}
