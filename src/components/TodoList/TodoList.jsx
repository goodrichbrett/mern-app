import React from 'react';
import ToDo from '../../components/ToDo/ToDo';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const TodoList = ({ user, todos }) => {
	return (
		<>
			<Link to={'/todos/add'}>
				<Button color="primary">Add New ToDo</Button>
			</Link>

			{todos.map((todo) => (
				<ToDo
					key={todo.id}
					name={todo.name}
					isDone={todo.isDone}
					dueDate={todo.dueDate}
				/>
			))}
		</>
	);
};

export default TodoList;
