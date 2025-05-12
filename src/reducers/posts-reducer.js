const initialPostsState = {};

export const postsReducer = (state = initialPostsState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return action.payload;
		default:
			return state;
	}
};
