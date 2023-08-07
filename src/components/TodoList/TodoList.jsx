import "./TodoList.css";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          onDelete={() => {
            onDeleteTodo(id);
          }}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
