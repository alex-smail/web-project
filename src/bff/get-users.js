// export const getUsers = () => {
// 	fetch('http://localhost:3001/users').then((loadedUsers) => {
// 		loadedUsers.json();
// 	});
// };


export const getUsers = async () => {
	try {
		const res = await fetch('http://localhost:3001/users');
		if (!res.ok) throw new Error('Ошибка ответа сервера');
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('Ошибка загрузки пользователей:', err.message);
		return []; // Всегда возвращаем массив
	}
};
