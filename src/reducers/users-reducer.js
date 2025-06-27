const initialUsersState = {}

export const usersReducer = (state = initialUsersState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER':
			return payload;
		default:
			return state;
	}
};
