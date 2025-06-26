import { getComments, getPost, getUsers } from '../api';
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

	const comments = await getComments(postId);

	const users = await getUsers();
	//обновленный комментарий для получения именю пользователя
	const commnetsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id}) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		}
	});

	return {
		error: null,
		res: {
			...post,
			comments: commnetsWithAuthor,
		},
	};
};

