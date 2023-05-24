import React, { useState } from 'react';

function TaskManager() {
	const [taskInput, setTaskInput] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleTaskInputChange = (event) => {
		setTaskInput(event.target.value);
	};

	const handleAddTask = () => {
		if (taskInput.trim() !== '') {
			setTasks([...tasks, taskInput]);
			setTaskInput('');
		}
	};

	return (
		<div>
			<h1>Task Manager</h1>
			<input type="text" value={taskInput} onChange={handleTaskInputChange} />
			<button onClick={handleAddTask}>Add Task</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
		</div>
	);
}

export default TaskManager;
