import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = 'http://localhost:3001/comments';
const POST_COMMENTS_URL = `http://localhost:3001/comments?post_id=`;
export const getComments = async (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	return fetch(url)
			.then((loadedPost) => loadedPost.json())
			.then((loadedPost) => loadedPost.map(transformComment));
};
