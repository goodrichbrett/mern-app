import tokenService from '../services/tokenService';
const BASE_URL = '/api/todos/';

export function create(todo) {
	return fetch(
		BASE_URL,
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(todo),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getAll() {
	return fetch(BASE_URL, { mode: 'cors' }).then((res) => res.json());
}

export function deleteOne(id) {
	return fetch(
		`${BASE_URL}${id}`,
		{
			method: 'DELETE',
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function update(todo) {
	return fetch(
		`${BASE_URL}${todo._id}`,
		{
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(todo),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getTodos(todos) {
	return fetch(
		`${BASE_URL}${todos}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}
