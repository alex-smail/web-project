import { addSession, deleteSession, getSession } from './api';

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);

		addSession(hash, user);

		return hash;
	},
	async remove(hash) {
		const session = await getSession(hash);

		if (!session || !session.user) return;
		deleteSession(session.id);
	},
	async access(hash, accessRoles) {
		const dbSession = await getSession(hash);

		if (!dbSession || !dbSession.user) {
			return false;
		}

		return accessRoles.includes(dbSession.user.roleId);
	},
};
