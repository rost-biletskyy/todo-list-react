import { List } from "@material-ui/core";
import Todo from "./Todo";
import "../App.css";

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <List className="list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;