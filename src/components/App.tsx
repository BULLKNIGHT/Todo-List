import { TodoListProvider } from "../context/TodoListProvider";
import { TodoApplication } from "./TodoApplication";

function App() {
    return (
        <TodoListProvider>
            <TodoApplication />
        </TodoListProvider>
    );
}

export default App;
