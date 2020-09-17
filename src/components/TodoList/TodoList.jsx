import React from 'react';
import ToDo from '../../components/ToDo/ToDo';
import { Link } from 'react-router-dom';

const TodoList = ({ user, todoList }) => {
	return (
		<>
			<Link to={'todos/add'}>New To-Do</Link>

			{todoList.map((todo) => (
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
