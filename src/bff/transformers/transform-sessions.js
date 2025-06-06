export const transformSession = (dbSessions) => ({
	id: dbSessions.id,
	hash: dbSessions.hash,
	user: dbSessions.user,
});
