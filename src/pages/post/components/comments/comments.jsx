/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';
import { PROP_TYPE, ROLE } from '../../../../constants';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		if (!content.trim()) return; // Защита от пустых комментариев

		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<>
					<div className="new-comment">
						<textarea
							name="comment"
							value={newComment}
							placeholder="Комментарий..."
							onChange={({ target }) => {
								target.value === ''
									? setNewComment('')
									: setNewComment(target.value);
							}}
						></textarea>
						<Icon
							id="fa-paper-plane-o"
							margin="0 0 0 10px"
							size="18px"
							onClick={() =>
								onNewCommentAdd(userId, postId, newComment)
							}
						/>
					</div>
				</>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;
	margin-top: 20px;

	& .new-comment {
		display: flex;
		width: 100%;
	}

	& .new-comment textarea {
		resize: none;
		width: 550px;
		height: 120px;
		font-size: 16px;
		padding: 10px;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
