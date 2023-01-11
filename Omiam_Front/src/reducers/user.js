import {
  OPEN_LOGIN, OPEN_REGISTRATION, SET_LOGIN_CREDENTIALS, SET_REGISTRATION_CREDENTIALS,
  LOGOUT, SAVE_USER, AUTH_ERROR, KEEP_LOGIN, RESET_REGISTRATION_FORM, TOGGLE_DROPDOWN_MENU,
  SET_FOCUS, TOGGLE_BACKOFFICE, RESET_LOGIN_CREDENTIALS, SET_ERROR_MESSAGE, TOGGLE_VALIDATE_FORM,
} from '../action/user';

export const initialState = {
  settingsRegister: {
    isRegister: false,
    pseudo: '',
    email: '',
    password: '',
    confirmedPassword: '',
    avatar: '',
    errors: {},
    formIsValid: true,
    signinError: {
      pseudoUser: false,
      emailfocused: false,
      passwordfocused: false,
      matchpasswordfocused: false,
    },
  },
  settingsLogIn: {
    logs: false,
    email: '',
    password: '',
    userid: '',
    pseudo: '', // Renvoyé par l'API
    avatar: '', // Renvoyé par l'API
    role: '',
    token: '',
  },
  isLoginOpen: true,
  isRegistrationOpen: false,
  backofficeRights: false,
  userProfile: {
    isListOpen: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_CREDENTIALS:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          [action.field]: action.value,
        },
      };

    case SET_REGISTRATION_CREDENTIALS:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          [action.field]: action.value,
        },
      };

    case OPEN_LOGIN:
      return {
        ...state,
        isLoginOpen: true,
        isRegistrationOpen: false,
      };

    case OPEN_REGISTRATION:
      return {
        ...state,
        isLoginOpen: false,
        isRegistrationOpen: true,
      };

    case LOGOUT:
      return {
        ...state,
        backofficeRights: false,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: false,
          pseudo: '',
          avatar: '',
          token: '',
          userid: '',
          role: '',
        },
      };

    case SAVE_USER:
      return {
        ...state,
        settingsLogIn: {
          ...action.user,
          email: '',
          password: '',
        },
        auth: {
          error: false,
          errorMessage: '',
        },
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };

    case KEEP_LOGIN:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: action.logs,
          token: action.token,
          avatar: action.avatar,
          userid: action.userid,
          role: action.role,
          pseudo: action.pseudo,
        },
      };

    case RESET_REGISTRATION_FORM:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          pseudo: '',
          email: '',
          password: '',
          confirmedPassword: '',
        },
        isLoginOpen: true,
        isRegistrationOpen: false,
      };

    case TOGGLE_DROPDOWN_MENU:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          isListOpen: !state.userProfile.isListOpen,
        },
      };

    case SET_FOCUS:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          [action.field]: action.value,
        },
      };

    case TOGGLE_BACKOFFICE:
      return {
        ...state,
        backofficeRights: !state.backofficeRights,
      };

    case RESET_LOGIN_CREDENTIALS:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          email: '',
          password: '',
        },
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          formIsValid: false,
          errors: {
            ...state.errors,
            [action.field]: action.message,
          },
        },
      };

    case TOGGLE_VALIDATE_FORM:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          formIsValid: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
