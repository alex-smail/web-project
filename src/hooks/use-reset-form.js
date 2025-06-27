import { useEffect } from 'react';
import { useStore } from 'react-redux';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		let currentWaclogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let prevWaslogout = currentWaclogout;
			currentWaclogout = store.getState().app.wasLogout;

			if (currentWaclogout !== prevWaslogout) reset();
		});
	}, [reset, store]);
};
