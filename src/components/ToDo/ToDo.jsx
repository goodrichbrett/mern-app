import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ToDo = ({ name, isDone, dueDate, handleDeleteTodo, todo }) => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle>{name}</CardTitle>
					<CardText>
						IsDone: {isDone ? 'true' : 'false'} Due: {dueDate}
					</CardText>
				</CardBody>
				<Link to={'/'}>
					<Button
						onClick={() => handleDeleteTodo(todo._id)}
						color="primary"
					>
						Delete
					</Button>
				</Link>
				<Link to={'/'}>
					<Button color="primary">Update</Button>
				</Link>
			</Card>
		</div>
	);
};

export default ToDo;
