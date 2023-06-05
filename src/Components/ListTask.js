import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { deleteTask } from './actions';

const ListTask = ({ todos, deleteTask }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.isDone === (filter === 'done'));

  return (
    <div style={{ textAlign: "left", marginTop: "10px"}}>
        <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="notDone">Not Done</option>
        </select>
        {filteredTodos.map((todo) => (
            <Task key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
        </div>
    );
    };

    const mapStateToProps = (state) => ({
    todos: state.todos,
    });

    const mapDispatchToProps = {
    deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
