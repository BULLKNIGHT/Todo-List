/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from "react";
import { TextField, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

interface EditItemProps {
    item: string,
    index: number,
    saveHandler: (index: number, updatedTodo: string) => void,
    cancelHandler: () => void,
}

const editContainerStyle = css`
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    div {
        font-family: "Montserrat";
        display: flex;
        align-items: center;
        gap: 2px;
        width: inherit;
    }
`;

export const EditItem: React.FC<EditItemProps> = ({ item, index, saveHandler, cancelHandler }) => {
    const [value, setValue] = useState(item);
    return (
        <div css={editContainerStyle}>
            <div>
                <EditIcon />
                <TextField
                    autoFocus
                    variant="standard"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
            <IconButton onClick={() => saveHandler(index, value)}>
                <DoneIcon />
            </IconButton>
            <IconButton onClick={() => cancelHandler()}>
                <ClearIcon />
            </IconButton>
        </div>
    );
}
