import { Component } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";
import { ContextTodo } from "./contexts/ContextTodo";
import Loader from "./components/Loader/Loader";

class App extends Component {
  static contextType = ContextTodo;

  render() {
    const { todos, addTodo, isLoading } = this.context;

    return (
      <div className={styles.app}>
        <Header title="Todo List" countTodos={todos.length} />
        <TodoAdd addTodo={addTodo} />
        {isLoading ? <Loader /> : <TodoList todos={todos} />}
      </div>
    );
  }
}

export default App;
