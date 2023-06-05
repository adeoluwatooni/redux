import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, editTodo, deleteTask } from './actions';

const Task = ({ todo, toggleTodo, editTodo, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedDescription.trim() !== '') {
      editTodo(todo.id, editedDescription);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteTask(todo.id);
  };
  const colorButton = {
    borderRadius: "8px",
    border: "none",
    marginBottom: 2,
    marginLeft: 20,
    backgroundColor: "green",
    color: "white"
  }

  return (
    <div style={{ textAlign: "left", marginTop: "10px", backgroundColor:"transparent", borderRadius: 15,border:"1px solid white", color: "white" }}>
      <input type="checkbox" checked={todo.isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.description}</span>
          <button
            style={colorButton}
            onClick={handleEdit}>Edit</button>
          <button
            style={colorButton}  
            onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default connect(null, { toggleTodo, editTodo, deleteTask })(Task);
