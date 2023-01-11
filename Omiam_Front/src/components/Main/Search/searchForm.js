import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setSettingsField, submitValue, valueToogle, saveCategoryId, fetchRecipesCategory,
} from '../../../action/homePage';

function SearchForm() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const handleChange = (evt) => {
    dispatch(setSettingsField(evt.target.value, 'search'));
  };

  const handleFocus = (evt) => {
    console.log(evt.bubbles);
    dispatch(valueToogle(evt.bubbles));
  };
  const handleBlur = (evt) => {
    dispatch(valueToogle(evt.cancelable));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitValue());
  };

  const { id, slug } = useParams();

  dispatch(saveCategoryId(id));
  console.log(id);
  useEffect(() => {
    dispatch(fetchRecipesCategory(id));
  }, [id]);

  return (
    <div className="search">
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            value={valueSearch}
            onClick={handleFocus}
            // onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            className="search-field-input"
            placeholder="Rechercher"
          />
          <Link to="/recherche">
            <button className="search-button" type="submit">
              <i className="icon-search" />
            </button>
          </Link>
        </form>
      </div>
      {/* List Catégories */}
      <div className="list">
        <ul className="list-categories">
          <Link
            to="/recettes/1/apero/search"
          >
            <li className="list-categories-icon"><i className="icon-drink" /></li>
          </Link>
          <Link
            to="/recettes/2/entree/search"
          >
            <li className="list-categories-icon"><i className="icon-entrance" /></li>
          </Link>
          <Link
            to="/recettes/3/plat/search"
          >
            <li className="list-categories-icon"><i className="icon-dish" /></li>
          </Link>
          <Link
            to="/recettes/4/dessert/search"
          >
            <li className="list-categories-icon"><i className="icon-cakes" /></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SearchForm;
