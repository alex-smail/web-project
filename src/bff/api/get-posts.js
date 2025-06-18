import { transformPost } from '../transformers';
export const getPosts = async () => {
	try {
		const res = await fetch('http://localhost:3001/posts');
		if (!res.ok) throw new Error('Ошибка ответа сервера');
		const posts = await res.json();
		return posts.map(transformPost);
	} catch (err) {
		console.error('Ошибка загрузки постов:', err.message);
		return []; // Всегда возвращаем массив
	}
};
