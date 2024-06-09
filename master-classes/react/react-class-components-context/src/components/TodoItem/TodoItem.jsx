import { Component } from "react";
import PropTypes from 'prop-types';
import { ContextTodo } from "../../contexts/ContextTodo";
import styles from './TodoItem.module.css';

class TodoItem extends Component {
    static contextType = ContextTodo;

    handleRemoveTodo = (e) => {
        e.stopPropagation();
        this.context.removeTodo(this.props.todo.id);
    }

    render () {
        const { toggleTodo } = this.context;
        const { todo } = this.props;
        const { id, title, completed } = todo;
        return (
            <div className={styles.item} onClick={() => toggleTodo(id)}>
                <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
                <span className={completed ? styles.done : ''}>{title}</span>
                <button onClick={(e)=>this.handleRemoveTodo(e)}>Remove</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired
}

export default TodoItem;