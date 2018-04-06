import { createBrowserHistory } from 'history';
import { emailConstants } from '../_constants';
import { emailService } from '../_services';
import { alertActions } from './';

export const userActions = {
	register,
};

function register(mail) {
	return dispatch => {
		dispatch(request(mail));

		emailService.register(mail)
			.then(
				() => {
					dispatch(success());
					createBrowserHistory().push('/');
					dispatch(alertActions.success('Email successfully sent'));
				},
				error => {
					dispatch(failure(error));
					dispatch(alertActions.error(error));
				}
			);
	};

	function request(mail) { return { type: emailConstants.EMAIL_REQUEST, mail } }
	function success(mail) { return { type: emailConstants.EMAIL_SUCCESS, mail } }
	function failure(error) { return { type: emailConstants.EMAIL_FAILURE, error } }
}
