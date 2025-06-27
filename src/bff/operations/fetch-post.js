import { getPost } from '../api';
import { getPostCommnetsWithAuthor } from '../utils';
export const fetchPost = async (postId) => {
	let post;
	let error;

	try {
		post = await getPost(postId);

	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const commnetsWithAuthor = await getPostCommnetsWithAuthor(postId);

	return {
		error: null,
		res: {
			...post,
			comments: commnetsWithAuthor,
		},
	};
};

