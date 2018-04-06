import { emailConstants } from '../_constants';

export function email(state = {}, action) {
	switch (action.type) {
		case emailConstants.EMAIL_REQUEST:
			return {
				loading: true,
			};
		case emailConstants.EMAIL_SUCCESS:
			return {
				items: action.mail,
			};
		case emailConstants.EMAIL_FAILURE:
			return {
				error: action.error,
			};
		default:
			return state;
	}
}
