/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useServerRequest } from '../../../../hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { checkAccess } from '../../../../utils/chek-access';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';

const specialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate('/')
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						inactive={true}
						id="fa-calendar-o"
						margin="0 7px 0 0"
						size="18px"
					/>
				)}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							size="21px"
							margin="0 00 0 7px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpecialPanel = styled(specialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	align-items: center;

	& .published-at {
		display: flex;
		font-size: 18px;
		align-items: center;
	}

	& .buttons {
		display: flex;
	}

	& i {
		font-size: 18px;
		position: relative;
		top: -4px;
	}
`;

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
}
