/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react'
import { useTodoListManager } from '../context/TodoListProvider';
import { TextField, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const inputContainerStyle = css`
    display: flex;
    justify-content: center;
    input {
        font-family: Montserrat;
    }
    label {
        font-family: Montserrat;
    }
`;

export const AddTodo = () => {
    const [value, setValue] = useState('');
    const { addTodo } = useTodoListManager();

    const addTodoHandler = () => {
        if (!value.trim().length) return;
        addTodo(value.trim());
        setValue('');

    }

    return (
        <div css={inputContainerStyle}>
            <TextField
                sx={{ width: '75%' }}
                autoFocus
                label="Enter Todo"
                variant="standard"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <IconButton size="large" onClick={addTodoHandler}>
                <AddCircleIcon fontSize="large" />
            </IconButton>
        </div>
    );
}
