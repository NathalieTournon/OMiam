import './styles.scss';
import { MdOutlineArrowDropDown, MdOutlineArrowRight } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../Logo';
import { showSidebar } from '../../action/header';
import { logout, toggleDropdownMenu } from '../../action/user';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showSidebar());
  };

  const { logs, pseudo, avatar } = useSelector((state) => state.user.settingsLogIn);
  const { isListOpen } = useSelector((state) => state.user.userProfile);
  const { backofficeRights } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleClickMenu = () => {
    dispatch(toggleDropdownMenu());
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <ul className="navbar-wrapper-links">
          <NavLink
            to="/miam"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Les meilleurs Miam's
          </NavLink>
          <NavLink
            to="/dernieres-recettes"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Les dernières recettes
          </NavLink>
          <NavLink
            to="/chefs"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Chefs à la Une
          </NavLink>
          <NavLink
            to="/recettes-aleatoires"
            className={
              ({ isActive }) => (isActive ? 'navbar-wrapper-item--active' : 'navbar-wrapper-item')
              }
          >
            Recettes aléatoires
          </NavLink>
        </ul>
        <div className="desktop-connexion">
          {logs
            ? (
              <Link to="/mon-compte" className="user-info">
                <img src={avatar} alt="user profile" className="user-info-avatar" />
                <span className="user-info-pseudo">{pseudo} </span>
              </Link>
            )
            : (
              <button
                type="button"
                className="navbar-wrapper-button"
              >
                <Link to="/connexion" className="menu-links">
                  Connexion
                </Link>
              </button>
            )}
        </div>
        <div className="icon">
          {logs
            ? (
              <div className="icon-flex">
                <div>
                  <Link to="/mon-compte" className="user-info">
                    <img src={avatar} alt="user profile" className="user-info-avatar" />
                    <span className="user-info-pseudo" onClick={handleClickMenu}>{pseudo}
                      {
                      isListOpen
                        ? <MdOutlineArrowDropDown />
                        : <MdOutlineArrowRight />
                      }
                    </span>
                  </Link>
                  {
                isListOpen && (
                  <ul className="dropdown-list">
                    {
                      backofficeRights
                      && (
                      <a
                        href=" http://adrienpinilla-server.eddi.cloud/omiam/current/public/login"
                        className="dropdown-list-link"
                      >Backoffice
                      </a>
                      )
                      }
                    <Link
                      to="/connexion"
                      onClick={handleLogout}
                      className="dropdown-list-link"
                    >Déconnexion
                    </Link>
                  </ul>
                )
                }
                </div>
                <i className="icon-bars" onClick={() => handleClick()} />
              </div>
            )
            : (
              <div className="icon-flex">
                <Link to="/connexion">
                  <i className="icon-lock" />
                </Link>
                <i className="icon-bars" onClick={() => handleClick()} />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
