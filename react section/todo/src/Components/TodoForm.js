import React, { useState, useContext } from 'react';
import { FormGroup, Input, Button, Form, InputGroup } from 'reactstrap';
import { v4 } from 'uuid';
import { TodoContext } from '../Context/TodoContext';
import { ADD_TODO } from '../Context/action.types';

const TodoForm = () => {
	const [todoString, setTodoString] = useState('');

	const { dispatch } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoString === '') {
			return alert('Please enter a todo');
		}

		const todo = {
			todoString,
			id: v4(),
		};
		dispatch({
			type: ADD_TODO,
			payload: todo,
		});
		setTodoString('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup addontype="prepend">
					<Input
						type="text"
						name="todo"
						id="todo"
						placeholder="Enter your todo"
						value={todoString}
						onChange={(e) => setTodoString(e.target.value)}
					/>
					<Button type="submit" color="succsess">
						Add
					</Button>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default TodoForm;
