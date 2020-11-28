import actionTypes from "./NewsletterFormActionTypes";

const getNewsletters = () => ({
  type: actionTypes.GET_NEWSLETTERS,
});

const getNewslettersSuccess = (newsletterOptions) => ({
  type: actionTypes.GET_NEWSLETTERS_SUCCESS,
  payload: { newsletterOptions },
});

const changeField = (change) => ({
  type: actionTypes.CHANGE_FIELD,
  payload: change,
});

const NewsletterFormActions = {
  getNewsletters,
  getNewslettersSuccess,
  changeField,
};

export default NewsletterFormActions;
