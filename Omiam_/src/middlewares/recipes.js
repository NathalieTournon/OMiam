import axios from 'axios';
import { FETCH_RECIPES_FULL, saveRecipes } from '../action/recipes';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_FULL: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes')
        .then(
          (response) => {
            // console.log(response.data.miamsRecipes);
            store.dispatch(saveRecipes(response.data));
            // console.log(result);
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
