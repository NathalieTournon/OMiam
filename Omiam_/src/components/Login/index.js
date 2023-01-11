import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials, login, authError } from '../../action/user';

function Login() {
  const {
    email, password,
  } = useSelector((state) => state.user.settingsLogIn);
  const {
    error, errorMessage,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'password'));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (email === '' && password === '') {
      return dispatch(authError('Veuillez saisir votre adresse email et mot de passe'));
    }
    if (email === '') {
      return dispatch(authError('Veuillez saisir votre adresse email'));
    }
    if (password === '') {
      return dispatch(authError('Veuillez saisir votre mot de passe'));
    }

    dispatch(login());
  };

  return (
    <form className="login">
      {error
      && (
        <p
          className="error-message"
        >{errorMessage}
        </p>
      )}
      <div className="login-field">
        <label
          htmlFor="email"
          className="login-label"
        >
          Email *
          <input
            placeholder="email@omiam.com"
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            required
            className="login-input"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className="login-field">
        <label
          htmlFor="password"
          className="login-label"
        >
          Mot de passe *
          <input
            placeholder="*****"
            type="password"
            id="password"
            value={password}
            required
            className="login-input"
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button type="submit" className="login-submit" onClick={handleClick}>Connexion</button>
    </form>
  );
}

export default Login;
