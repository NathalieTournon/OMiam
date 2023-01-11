import { useDispatch, useSelector } from 'react-redux';
import {
  emailAction,
  pseudoAction,
  topicAction,
  messageAction,
} from '../../../action/contact';
import './styles.scss';

function Contact() {
  const dispatch = useDispatch();
  const valuePseudo = useSelector((state) => state.pseudo);
  const valueEmail = useSelector((state) => state.email);
  const valueTopic = useSelector((state) => state.topic);
  const valueMessage = useSelector((state) => state.message);

  const handleChangePseudo = ((event) => {
    dispatch(pseudoAction(event.target.value, 'pseudo'));
  });
  const handleChangeEmail = ((event) => {
    dispatch(emailAction(event.target.value, 'email'));
  });
  const handleChangeTopic = ((event) => {
    dispatch(topicAction(event.target.value, 'topic'));
  });
  const handleChangeMessage = ((event) => {
    dispatch(messageAction(event.target.value, 'message'));
  });
  const handleSubmit = ((event) => {
    event.preventDefault();
    console.log(event);
    dispatch(postMessage());
  });
  return (
    <div className="contact">
      <h1 className="contact-title">Contactez-nous</h1>
      <p>Une remarque ? Une suggestion ? N'hesitez-pas à nous écrire.</p>

      <form className="form-general" onSubmit={handleSubmit}>

        <div className="label">
          <input
            className="pseudo-input"
            type="text"
            placeholder="Votre Pseudo"
            value={valuePseudo}
            onChange={handleChangePseudo}
          />
        </div>
        <div className="label">
          <input
            className="email-input"
            type="email"
            placeholder="Votre E-mail"
            value={valueEmail}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="label">
          <input
            className="topic-input"
            type="text"
            placeholder="Sujet"
            value={valueTopic}
            onChange={handleChangeTopic}
          />
        </div>
        <div className="label">
          <textarea
            className="message-input"
            type="text"
            rows="5"
            placeholder="Votre Message"
            value={valueMessage}
            onChange={handleChangeMessage}
          />
        </div>
        <button className="send-button" type="submit">
          <span className="send-button-submit">Envoyer</span>
          <i className="icon-oven" />
        </button>
      </form>
    </div>
  );
}

export default Contact;
