import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPharse, onChange }) => {
	return (
		<div className={className}>
			<Input value={searchPharse} placeholder="Поиск по заголовкам..." onChange={onChange}/>
			<Icon inactive={true} id="fa-search" size="18px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;

	& input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 9px;
		right: 9px;
	}
`;

Search.propTypes = {
	searchPharse: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
