import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import authService from '../../services/authService';
import Users from '../Users/Users';
import TodoList from '../../components/TodoList/TodoList';
import './App.css';
import AddTodo from '../../components/AddTodo/AddTodo';
import * as todoAPI from '../../services/todoService';
import EditTodo from '../../components/EditTodo/EditTodo';

class App extends Component {
	state = {
		user: authService.getUser(),
		todos: [],
	};

	handleLogout = () => {
		authService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() });
	};

	handleAddTodo = async (newTodoData) => {
		const newTodo = await todoAPI.create(newTodoData);
		newTodo.addedBy = {
			name: this.state.user.name,
			_id: this.state.user._id,
		};
		this.setState(
			(state) => ({
				todos: [...state.todos, newTodo],
			}),
			() => this.props.history.push('/')
		);
	};

	handleDeleteTodo = async (id) => {
		if (authService.getUser()) {
			await todoAPI.deleteOne(id);
			this.setState(
				(state) => ({
					todos: state.todos.filter((t) => t._id !== id),
				}),
				() => this.props.history.push('/')
			);
		} else {
			this.props.history.push('/login');
		}
	};

	handleUpdateTodo = async (updatedTodoData) => {
		const updatedTodo = await todoAPI.update(updatedTodoData);
		const newTodosArray = this.state.todos.map((t) =>
			t._id === updatedTodo._id ? updatedTodo : t
		);
		this.setState({ todos: newTodosArray }, () =>
			this.props.history.push('/')
		);
	};

	async componentDidMount() {
		const todos = await todoAPI.getTodos(this.state.todos);
		this.setState({ todos });
		console.log(this.state);
	}

	render() {
		const { user } = this.state;
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<Route
					exact
					path="/"
					render={() => (
						<TodoList
							todos={this.state.todos}
							user={this.state.user}
							handleAddTodo={this.handleAddTodo}
							handleDeleteTodo={this.handleDeleteTodo}
							handleUpdateTodo={this.handleUpdateTodo}
						/>
					)}
				/>
				<Route
					exact
					path="/signup"
					render={({ history }) => (
						<Signup
							history={history}
							handleSignupOrLogin={this.handleSignupOrLogin}
						/>
					)}
				/>
				<Route
					exact
					path="/login"
					render={({ history }) => (
						<Login
							history={history}
							handleSignupOrLogin={this.handleSignupOrLogin}
						/>
					)}
				/>
				<Route
					exact
					path="/users"
					render={() => (user ? <Users /> : <Redirect to="/login" />)}
				/>
				<Route
					exact
					path="/todos/add"
					render={() => (
						<AddTodo
							user={this.state.user}
							handleAddTodo={this.handleAddTodo}
						/>
					)}
				/>
				<Route
					exact
					path="/edit"
					render={({ location }) =>
						authService.getUser() ? (
							<EditTodo
								handleUpdateTodo={this.handleUpdateTodo}
								location={location}
								user={this.state.user}
							/>
						) : (
							<Redirect to="/login" />
						)
					}
				/>
			</>
		);
	}
}

export default App;
