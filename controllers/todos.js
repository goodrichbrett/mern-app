const Todo = require('../models/todo');

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
	Todo.create(req.body).then((todo) => {
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
