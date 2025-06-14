/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components';
import styled from 'styled-components';
import {
	CLOSE_MODAL,
	openModal,
	removeCommentAsync,
} from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';

const CommentContainer = ({
	className,
	id,
	author,
	content,
	publishedAt,
	postId,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							margin="0 0 0 10px"
							size="18px"
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							margin="0 10px 0 10px"
							size="18px"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="20px 0 0 10px"
				size="21px"
				onClick={() => onCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;

	& .comment {
		border: 1px solid #000;
		width: 550px;
		margin: 20px 0 0;
		padding: 5px 10px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& . author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
}`;
