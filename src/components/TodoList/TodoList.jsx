<<<<<<< HEAD
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
=======
import React from "react";
import ToDo from "../../components/ToDo/ToDo";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const TodoList = ({ user, todoList }) => {
  return (
    <>
      <Link to={"/create"}>
        <Button color="primary">Add New ToDo</Button>
      </Link>

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
>>>>>>> 71687d2000f40498fd6e460f94061f32317718e4
};

export default TodoList;
