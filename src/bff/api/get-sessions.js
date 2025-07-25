import { transformSession } from "../transformers/transform-sessions";


export const getSession = async (hash) =>
	fetch(`http://localhost:3001/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
