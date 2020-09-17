import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditTodo extends Component {
	state = {
		// invalidForm: true,
		formData: this.props.location.state.todo,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleUpdateTodo(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({
			formData,
			// invalidForm: !this.formRef.current.checkValidity(),
		});
	};

	formRef = React.createRef();
	render() {
		return (
			<>
				<div className="AddTodo">
					<h1>New Todo</h1>
					<Form ref={this.formRef} onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="name">Todo</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.name}
								type="text"
								name="name"
								id="name"
								required
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="isDone">Is Done?</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.isDone}
								type="text"
								name="isDone"
								id="isDone"
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="dueDate">Due Date</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.dueDate}
								type="date"
								name="dueDate"
								id="dueDate"
							></Input>
						</FormGroup>
						<Button type="submit">Submit</Button>
					</Form>
				</div>
			</>
		);
	}
}

export default EditTodo;
