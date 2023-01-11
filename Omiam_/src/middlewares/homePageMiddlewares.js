import axios from 'axios';
import {
  FETCH_RECIPES,
  FETCH_RECIPES_CATEGORY,
  saveRecipesLast,
  saveRecipesMiams,
  saveRecipesRandom,
  saveRecipesCategory,
} from '../action/homePage';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/home')
        .then(
          (response) => {
            console.log(response);
            console.log(response.data.lastRecipes);
            store.dispatch(saveRecipesLast(response.data.lastRecipes));
            store.dispatch(saveRecipesMiams(response.data.miamsRecipes));
            store.dispatch(saveRecipesRandom(response.data.randomRecipes));
          },
        );
      return next(action);
    }
    case FETCH_RECIPES_CATEGORY: {
      const state = store.getState();
      const { categoryId } = state.homePage;
      console.log(categoryId);
      axios.get(`http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/categories/${categoryId}/search?query=`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveRecipesCategory(response.data));
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default homePage;
