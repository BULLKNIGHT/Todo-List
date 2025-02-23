/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

const containerStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;
const contentStyle = css`
	background-color: #f3d250;
	width: 480px;
	padding: 20px;
	border-radius: 20px;
	height: 70%;
`;

const headerStyle = css`
	display: flex;
`;

export const TodoApplication = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<div css={containerStyle}>
			<div css={headerStyle}>
				<h1>Todo List</h1>
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			</div>
			<div css={contentStyle}>
				<AddTodo />
				<TodoList />
			</div>
		</div>
	);
};
