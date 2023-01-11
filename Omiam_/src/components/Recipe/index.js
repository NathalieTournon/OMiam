import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipe, idSlugRecipe, setIsMiam, submitUsersIdMiams, SUBMIT_USERS_ID_MIAMS } from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  const dispatch = useDispatch();
  const { id } = useParams();
 
  dispatch(idSlugRecipe(id));
  // const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  const usersIdMiamed = useSelector((state) => state.oneRecipe.usersId);
  // console.log(usersIdMiamed);
  const oneRecipe = useSelector((state) => state.oneRecipe.list);
  const ingredients = useSelector((state) => state.oneRecipe.ingredients);
  const listSteps = useSelector((state) => state.oneRecipe.steps);
  const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  // console.log(usersIdMiamed);
  const handleSubmit = (evt) => {
    
    // const isMiam = usersIdMiamed.includes(userIdConnected);
    dispatch(submitUsersIdMiams());
    evt.preventDefault();
  };
  return (
    <div className="one-recipe">
      {oneRecipe.map((item) => (
        <>
          <div>
            <div className="one-recipe-header">
              <h1 className="one-recipe-title">{item.title}</h1>
              <div className="one-recipe-author">
{/*                <img className="one-recipe-img-user" src={item.user.avatar} alt="-avatar" />*/}
                <h2 className="one-recipe-author-title"> de {item.user.pseudo}</h2>
              </div>
              <div className="one-recipe-miams">
                <div>
                  <i className={item.category.iconName} />
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <button type="submit" className="one-recipe-miams-form">
                      <span className="one-recipe-miams-label">{item.nbMiams}</span>
                      <i className="icon-miam" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="one-recipe-img">
              <img
                src={item.picture}
                alt={item.title}
                className="one-recipe-img"
              />
            </div>
            <div className="one-recipe-timer">
              <ul className="one-recipe-timer-ul">
                <li><i className="icon-timer p-1" /><span>{item.duration} min</span></li>
                <li><i className={`icon-difficulty-${item.difficulty}`} /></li>
              </ul>
              <p className="one-recipe-caption">{item.caption}</p>
            </div>
            <div className="one-recipe-ingredient">
              <h2 className="one-recipe-ingredient-title">Ingrédients pour 4 personnes</h2>
              <ul className="one-recipe-ingredient-list">
                {ingredients.map((element) => (
                  <li className="ingredient" key={element.id}><p className="ingredient-text">{element.quantity} {element.unit} {element.ingredient.name}</p></li>
                ))}
              </ul>
            </div>
            <div className="one-recipe-steps">
              <ul className="one-recipe-steps-ul">
                {console.log(listSteps)}
                {Object.keys(listSteps[0]).map((nom, numberInt) => console.log('nom =>', nom, 'number =>', numberInt))}
                {Object.keys(listSteps[0]).map((nom, numberInt) => (
                  <li>
                    <h2 className="one-recipe-steps-title">Etape {numberInt + 1}</h2>
                    <p className="one-recipe-steps-etape">{listSteps[0][nom]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Comments />
        </>
      ))}
    </div>
  );
}

export default Recipe;
