const initialUsersState = {}

export const usersReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return action.payload;
		default:
			return state;
	}
};
