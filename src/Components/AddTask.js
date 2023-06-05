import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const AddTask = ({ addTodo }) => {
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (description.trim() !== '') {
        const id = Date.now(); // You can use any unique identifier method here
        addTodo(id, description);
        setDescription('');
        }
    };

    return (
        <div>
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default connect(null, { addTodo })(AddTask);
