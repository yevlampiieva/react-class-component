import React, { Component } from "react";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList/TodoList";
import initialTodos from "./components/todos.json";

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
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({ todos: prevState.todos.filter((todo) => todo.id !== todoId) }));
  };

  render() {
    const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);
    // console.log(completedTodos.length);

    const totalTodos = todos.length;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown />      */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {totalTodos}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// const App = () => {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       {/* <Counter /> */}
//       {/* <Counter initialValue={10} /> */}
//       {/* <Dropdown />      */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       <TodoList />
//     </>
//   );
// };

export default App;
