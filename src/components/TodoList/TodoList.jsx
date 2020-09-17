import React from 'react';
import ToDo from '../../components/ToDo/ToDo';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const TodoList = (props) => {
	return (
		<>
			<Link to={'/todos/add'}>
				<Button color="primary">Add New ToDo</Button>
			</Link>

			{props.todos.map((todo) => (
				<ToDo
					key={todo._id}
					name={todo.name}
					isDone={todo.isDone}
					dueDate={todo.dueDate}
					handleDeleteTodo={props.handleDeleteTodo}
					handleUpdateTodo={props.handleUpdateTodo}
					user={props.user}
					todo={todo}
				/>
			))}
		</>
	);
};

export default TodoList;
