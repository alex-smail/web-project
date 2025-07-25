import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../../components';
const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(page + 1)}
			>
				Следующая
			</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(lastPage)}
			>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 140px;
	margin: 0 0 20px;
	padding: 0 35px;
	width: 100%;

	& button {
		margin: 0 5px;
	}

	& .current-page {
		border: 1px solid #000;
		width: 100%;
		height: 32px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		line-height: 32px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func,
};
