import { getComments, getUsers } from "../api";

export const getPostCommnetsWithAuthor = async (postId) => {
	const comments = await getComments(postId);

	const users = await getUsers();
	//обновленный комментарий для получения именю пользователя
	return comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});
};
