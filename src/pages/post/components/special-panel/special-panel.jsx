import { Icon } from '../../../../components';
import styled from 'styled-components';

const specialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="21px" />
			</div>
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
