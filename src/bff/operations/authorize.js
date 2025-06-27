import { getUser } from '../api';
import { sessions } from '../sessions';

// АВТОРИЗАЦИЯ
export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			rees: null,
		};
	}

	const { id, login, password, roleId } = user;

	if (password !== authPassword) {
		return {
			error: 'Неверный пароль',
			rees: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
