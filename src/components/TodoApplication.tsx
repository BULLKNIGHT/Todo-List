/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;
const contentStyle = css`
    background-color: #F3D250;
    width: 480px;
    padding: 20px;
    border-radius: 20px;
    height: 70%;
`;

export const TodoApplication = () => {
    return (
        <div css={containerStyle}>
            <h1>Todo List</h1>
            <div css={contentStyle}>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    )
}
