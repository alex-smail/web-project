import { transformPost } from '../transformers';
// export const getPosts = async ({ page, limit }) => {
// 	try {
// 		const res = await fetch(
// 			`http://localhost:3001/posts?_page=${page}&_limit=${limit}`
// 		);
// 		if (!res.ok) throw new Error('Ошибка ответа сервера');
// 		const posts = await Promise.all([res.json(), res.headers.get('Link')]);
// 		return posts.map(transformPost);
// 	} catch (err) {
// 		console.error('Ошибка загрузки постов:', err.message);
// 		return []; // Всегда возвращаем массив
// 	}
// };

// export const getPosts = (page, limit) => {
// 	fetch(`http://localhost:3001/posts?_page=${page}&_limit=${limit}`)
// 		.then((loadedPosts) =>
// 			Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')])
// 		)
// 		.then(([loadedPosts, link]) => ({
// 			posts: loadedPosts && loadedPosts.map(transformPost),
// 			link,
// 		}));
// };


export const getPosts = async (searchPharse, page, limit) => {
	const response = await fetch(`http://localhost:3001/posts?title_like=${searchPharse}&_page=${page}&_limit=${limit}`);
	const json = await response.json();
	const link = response.headers.get('Link');

	return {
		posts: json.map(transformPost),
		links: link,
	};
};
