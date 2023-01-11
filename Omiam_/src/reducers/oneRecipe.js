import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
  SAVE_COMMENTS,
  COMMENT_ACTION,
  ID_SLUG_RECIPE,
  SAVE_RECIPE_USERSID,
  SUBMIT_USERS_ID_MIAMS,
  SET_IS_MIAMS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  comments: [],
  comment: '',
  setIsMiam: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.list,
      };
    case SAVE_RECIPE_STEPS:
      return {
        ...state,
        steps: action.list,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.list,
      };
    case COMMENT_ACTION:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.field]: action.value,
        },
      };
    case ID_SLUG_RECIPE:
      return {
        ...state,
        idSlug: action.idSlug,
      };
    case SAVE_RECIPE_USERSID:
      return {
        ...state,
        usersId: action.usersId,
      };
    case SUBMIT_USERS_ID_MIAMS:
      return {
        ...state,
        isMiam: action.isMiam,
      };
    case SET_IS_MIAMS:
      return {
        ...state,
        setIsMiam: action.setIsMiam,
      };
    default:
      return state;
  }
};

export default reducer;
