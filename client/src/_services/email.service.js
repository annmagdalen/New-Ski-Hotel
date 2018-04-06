import { config } from '../_helpers';

export const userService = {
	register,
};

function register(mail) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(mail),
	};

	return fetch(config.apiUrl + '/email', requestOptions).then(handleResponse, handleError);
}

function handleResponse(response) {
	return new Promise((resolve, reject) => {
		if (response.ok) {
			// return json if it was returned in the response
			var contentType = response.headers.get("content-type");
			if (contentType && contentType.includes("application/json")) {
				response.json().then(json => resolve(json));
			} else {
				resolve();
			}
		} else {
			// return error message from response body
			response.text().then(text => reject(text));
		}
	});
}

function handleError(error) {
	return Promise.reject(error && error.message);
}
