import { createContext, useContext, useMemo, useState } from "react";

interface TodoListContextProps {
    todoList: string[],
    addTodo: (newTodo: string) => void,
    updateTodo: (index: number, updatedTodo: string) => void,
    deleteTodo: (index: number) => void,
}

const TodoListContext = createContext<TodoListContextProps>({
    todoList: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
});

export const TodoListProvider: React.FC = ({ children }) => {
    const [todoList, setTodoList] = useState<string[]>([]);

    const addTodo = (newTodo: string) => setTodoList([...todoList, newTodo]);

    const updateTodo = (index: number, updatedTodo: string) => setTodoList(
        todoList.map((item, idx) => idx === index ? updatedTodo : item)
    );

    const deleteTodo = (idx: number) => setTodoList(todoList.filter((_item, index) => index !== idx));

    const value = useMemo(
        () => ({ todoList, addTodo, updateTodo, deleteTodo }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [todoList]
    );

    return (<TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>);
}

export const useTodoListManager = () => {
    return useContext(TodoListContext);
}