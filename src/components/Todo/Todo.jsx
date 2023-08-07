import "./Todo.css";

const Todo = ({ text, onDelete }) => (
  <>
    <p className="TodoList__text">{text}</p>
    <button type="button" className="TodoList__btn" onClick={onDelete}>
      Delete
    </button>
  </>
);

export default Todo;
