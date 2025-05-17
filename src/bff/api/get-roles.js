export const getRoles = async () => {
	try {
		const res = await fetch('http://localhost:3001/roles');
		if (!res.ok) throw new Error('Ошибка ответа сервера');
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('Ошибка загрузки пользователей:', err.message);
		return []; // Всегда возвращаем массив
	}
};
