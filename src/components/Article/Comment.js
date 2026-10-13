import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { getAvatarUrl, onAvatarError } from '../../utils/avatar';

const Comment = props => {
  const comment = props.comment;
  const show = props.currentUser &&
    props.currentUser.username === comment.author.username;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link
          to={`/@${comment.author.username}`}
          className="comment-author">
          <img src={getAvatarUrl(comment.author.image)} className="comment-author-img" alt={comment.author.username} onError={onAvatarError} />
        </Link>
        &nbsp;
        <Link
          to={`/@${comment.author.username}`}
          className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </div>
    </div>
  );
};

export default Comment;
