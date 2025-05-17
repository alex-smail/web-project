import { transformUser } from '../transformers';
export const getUsers = async () => {
	try {
		const res = await fetch('http://localhost:3001/users');
		if (!res.ok) throw new Error('Ошибка ответа сервера');
		const users = await res.json();
		return users.map(transformUser);
	} catch (err) {
		console.error('Ошибка загрузки пользователей:', err.message);
		return []; // Всегда возвращаем массив
	}
};

// export const getUsers = () => {
// 	fetch('http://localhost:3001/users').then((loadedUsers) => {
// 		loadedUsers
// 			.json()
// 			.then(
// 				(loadedUsers) => loadedUsers && loadedUsers.map(transformUser)
// 			);
// 	});
// };
