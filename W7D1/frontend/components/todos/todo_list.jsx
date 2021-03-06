import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
    render() {
      return (
        <div>
          <TodoForm receiveTodo={ this.props.receiveTodo } />

          <ul>
            {this.props.todos.map((todo) => {
              return <TodoListItem key={todo.id} todo={todo} />;
            })}

          </ul>
        </div>


      );

    }

}

export default TodoList;
