import {
  PSEUDO_ACTION,
  EMAIL_ACTION,
  TOPIC_ACTION,
  MESSAGE_ACTION,
} from '../action/contact';

export const initialState = {
  pseudo: '',
  email: '',
  topic: '',
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PSEUDO_ACTION:
      return {
        ...state,
        pseudo: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case EMAIL_ACTION:
      return {
        ...state,
        email: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case TOPIC_ACTION:
      return {
        ...state,
        topic: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case MESSAGE_ACTION:
      return {
        ...state,
        message: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
