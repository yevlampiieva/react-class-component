import React, { Component } from "react";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList/TodoList";
import initialTodos from "./components/todos.json";
// import { Form } from "./components/Form/Form";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { Filter } from "./components/Filter/Filter";
import Modal from "./components/Modal/Modal";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    // todos: [],
    todos: initialTodos,
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");

    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }

    // setTimeout(() => {
    //   this.setState({ todos: parsedTodos });
    // }, 2000);
  }

  componentDidUpdate(prevState, prevProps) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }
  }

  addTodo = (text) => {
    const todo = {
      id: nanoid(),
      // text: text,
      text,
      completed: false,
    };

    // this.setState((prevState) => ({
    //   todos: [...prevState.todos, todo],
    // }));

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({ todos: prevState.todos.filter((todo) => todo.id !== todoId) }));
  };

  // formSubmitHandler = (data) => {
  //   console.log(data);
  // };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) => todo.text.toLowerCase().includes(normalizedFilter));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  // toggleModal = () => {
  //   this.setState((state) => ({ showModal: !state.showModal }));
  // };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);
    // console.log(completedTodos.length);

    const totalTodos = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is content of Modal like children</h1>
            <p>
              A tiny VS Code extension made up of a few commands that generate and insert lorem
              ipsum text into a text file. To use the extension, open the command palette (F1 or
              cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}

        <TodoEditor onSubmit={this.addTodo} />
        <Filter filter={filter} onChange={this.changeFilter} />
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} />
        <div>
          <p>Загальна кількість: {totalTodos}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}
        {/* <Counter /> */}
        {/* <Counter initialValue={5} /> */}
        {/* <Dropdown />      */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       <Counter />
//       <Counter initialValue={5} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList />
//     </>
//   );
// };

export default App;
