import actionTypes from "./NewsletterFormActionTypes";
import isFormValid from "./isNewsletterFormModelValid";

const withValidation = (state, field, value) => {
  const changedState = {
    ...state,
    fields: {
      ...state.fields,
      [field]: {
        ...state.fields[field],
        value,
      },
    },
  };

  return {
    ...changedState,
    isValid: isFormValid(changedState),
  };
};

const newsletterFormReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_NEWSLETTERS:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_NEWSLETTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fields: {
          ...state.fields,
          newsletter: {
            ...state.fields.newsletter,
            options: payload.newsletterOptions,
          },
        },
      };

    case actionTypes.CHANGE_FIELD:
      return withValidation(state, payload.field, payload.value);

    default:
      return state;
  }
};

export default newsletterFormReducer;
