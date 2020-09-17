import React, { Component } from 'react';
import ToDo from '../../components/ToDo/ToDo';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import * as todoAPI from '../../services/todoService';

// const TodoList = ({ user, todos }) => {
// 	return (
// 		<>
// 			<Link to={'/todos/add'}>
// 				<Button color="primary">Add New ToDo</Button>
// 			</Link>

// 			{todos.map((todo) => (
// 				<ToDo
// 					key={todo.id}
// 					name={todo.name}
// 					isDone={todo.isDone}
// 					dueDate={todo.dueDate}
// 				/>
// 			))}
// 		</>
// 	);
// };

// export default TodoList;

class TodoList extends Component {
	state = {
		todos: [],
	};

	async componentDidMount() {
		const todos = await todoAPI.getTodos(this.props.user.todos);
		console.log('pagetodos',todos);
		this.setState({todos: todos});
		console.log(this.state.todos)
	}

	render() {
		return (
			<>
				<Link to={'/todos/add'}>
					<Button color="primary">Add New ToDo</Button>
				</Link>

				{this.state.todos.map((todo) => (
					<ToDo
						key={todo.id}
						name={todo.name}
						isDone={todo.isDone}
						dueDate={todo.dueDate}
					/>
				))}
			</>
		);
	}
}

export default TodoList;
