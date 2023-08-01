import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo}) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">        
        <p className="TodoList__text">{text}</p>
        <button type="button" className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
