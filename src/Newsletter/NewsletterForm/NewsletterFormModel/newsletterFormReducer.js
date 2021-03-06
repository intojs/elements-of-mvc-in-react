import actionTypes from "./NewsletterFormActionTypes";

const isNewsletterFormModelValid = (model) => {
  const {
    fields: { fullName, newsletter },
  } = model;

  return !!(fullName.value && fullName.value.length > 2 && newsletter.value);
};

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
    isValid: isNewsletterFormModelValid(changedState),
  };
};

const newsletterFormReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_NEWSLETTERS_OPTIONS:
      return {
        ...state,
        isLoading: payload.newsletterOptions.length === 0,
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
