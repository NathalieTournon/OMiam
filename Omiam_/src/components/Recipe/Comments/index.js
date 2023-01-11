import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, commentAction, commentCreated } from '../../../action/oneRecipe';
import './styles.scss';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.oneRecipe.comments);
  const valueComment = useSelector((state) => state.comment);
  const handleChangeComment = ((event) => {
    dispatch(commentAction(event.target.value, 'commentValue'));
  });
  const handleSubmit = ((event) => {
    event.preventDefault();
    dispatch(commentCreated());
  });
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  return (
    <div className="one-recipe-comments">
      <h2 className="one-recipe-comments-title">Commentaires</h2>
      {comments.map((item) => (
        <>
          <ul className="one-recipe-comments-ul">
            <li><img className="one-recipe-img-user" src={item.user.avatar} alt="-avatar" /></li>
            <li><p className="one-recipe-comments-speudo">{item.user.pseudo}</p></li>

          </ul>
          <p className="one-recipe-comments-content">{item.content}</p>
        </>
      ))}
      <div className="one-recipe-comment">
        <h2 className="one-recipe-comment-title">Laissez un commentaire</h2>
        <form
          className="one-recipe-form"
          onSubmit={handleSubmit}
        >
          <textarea
            className="one-recipe-comment-textarea"
            type="text"
            rows="4"
            placeholder="Commentaire"
            value={valueComment}
            onChange={handleChangeComment}
          />
          <button className="send-button" type="submit">
            <span className="send-button-submit">Envoyer</span>
            <i className="icon-oven" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
