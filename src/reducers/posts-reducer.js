const initialPostsState = {};

export const postsReducer = (state = initialPostsState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER':
			return payload;
		default:
			return state;
	}
};
