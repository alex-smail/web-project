import PropTypes from 'prop-types';
import { ROLE } from './role';

const TOLE_ID = PropTypes.oneOf(Object.values(ROLE))

export const PROP_TYPE = {
	ROLE_ID: PropTypes.oneOf(Object.values(ROLE)),
	ROLE: PropTypes.shape({
		id: TOLE_ID,
		name: PropTypes.string.isRequired,
	}),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		id: PropTypes.number.isRequired,
		author: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
};
