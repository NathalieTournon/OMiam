import axios from 'axios';
import { FETCH_ACTION, POST_CREACTED, saveFetchIngredients } from '../action/createdRecipe';

const createdRecipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CREACTED: {
      // console.log(POST_CREACTED);
      const state = store.getState();
      const {
        title,
        caption,
        difficulty,
        category,
        duration,
      } = state.createdRecipe;

      const { ingredientsAdd } = state.createdRecipe;

      const {
        steps,
        ingredients,
        units,
        quantities,
      } = state.createdRecipe;
      const { token } = state.user.settingsLogIn;
      const formData = new FormData();
      formData.append('json', JSON.stringify({
        title: title,
        caption: caption,
        duration: parseInt(duration, 10),
        difficulty: parseInt(difficulty, 10),
        category: parseInt(category, 10),
        steps: steps,
      }));
      formData.append('ingredients', JSON.stringify({
        quantities: quantities,
        units: units,
        ingredients: ingredients,
      }));
      formData.append('ingredientsAdd', JSON.stringify({
        ingredientsAdd: ingredientsAdd,
      }));
      formData.append('picture', document.getElementById('fileUpload').files[0]);
      axios({
        method: 'post',
        url: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response.data);
        
        // const { data: user } = response;
        // j'enregistre mon token sur l'instance d'axios
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        return next(action), window.location = '/';
      })
        .catch((error) => {
          console.log(error);
          return next(action);
        });

      return next(action);
    }
    case FETCH_ACTION: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/ingredients')
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveFetchIngredients(response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default createdRecipeMiddleware;