import { Component, createContext } from "react";
import GetterTodos from "../api/apiTodos";

const ContextTodo = createContext();

class PropviderTodo extends Component {

    constructor(props){
        super(props);

        this.state = {
            todos: [],
            isLoading: true
        }
    }

    async componentDidMount () {
        const todos = await GetterTodos.getTodos();
        this.setState({todos});
        this.setState({isLoading: false});
    }

    removeTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos});
    }

    toggleTodo = (id) => {
        const todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });

        this.setState({todos});
    }

    addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
          }

          this.setState({todos: [newTodo, ...this.state.todos]})
    }

    render() {
        const values = {
            todos: this.state.todos,
            removeTodo: this.removeTodo,
            toggleTodo: this.toggleTodo,
            addTodo: this.addTodo,
            isLoading: this.state.isLoading
        }

        return (
            <ContextTodo.Provider value={values}>
                {this.props.children}
            </ContextTodo.Provider>
        );
    }
}

export { ContextTodo, PropviderTodo };
