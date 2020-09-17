const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
	index,
	create,
	delete: deleteTodo,
	update,
};

function index(req, res) {
	Todo.find({}, (err, todos) => {
		res.status(200).json(todos);
	});
}

function create(req, res) {
	req.body.addedBy = req.user._id;
	console.log(req.body.addedBy);
	Todo.create(req.body).then((todo) => {
		console.log(todo);
		User.findById(req.user._id).then((user) => {
			console.log(user.todos);
			user.todos.push(todo._id);
			user.save();
			console.log(user.todos);
		});
		res.status(200).json(todo);
	});
}

function deleteTodo(req, res) {
	Todo.findOneAndDelete(req.params.id).then((todo) => {
		res.status(200).json(todo);
	});
}

function update(req, res) {
	Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(todo) => {
			res.status(200).json(todo);
		}
	);
}
