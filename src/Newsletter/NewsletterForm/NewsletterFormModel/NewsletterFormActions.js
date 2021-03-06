import actionTypes from "./NewsletterFormActionTypes";

const setNewsletterOptions = (newsletterOptions) => ({
  type: actionTypes.SET_NEWSLETTERS_OPTIONS,
  payload: { newsletterOptions },
});

const changeField = (change) => ({
  type: actionTypes.CHANGE_FIELD,
  payload: change,
});

const NewsletterFormActions = {
  setNewsletterOptions,
  changeField,
};

export default NewsletterFormActions;
