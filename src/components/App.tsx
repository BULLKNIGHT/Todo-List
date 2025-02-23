import { Auth0Provider } from "@auth0/auth0-react";
import { TodoListProvider } from "../context/TodoListProvider";
import { TodoApplication } from "./TodoApplication";

function App() {
	return (
		<Auth0Provider
			domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
			clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<TodoListProvider>
				<TodoApplication />
			</TodoListProvider>
		</Auth0Provider>
	);
}

export default App;
