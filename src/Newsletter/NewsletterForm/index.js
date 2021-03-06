import React, { useEffect, useReducer } from "react";
import initialModel from "./NewsletterFormModel";
import actions from "./NewsletterFormModel/NewsletterFormActions";
import View from "./NewsletterFormView";
import reducer from "./NewsletterFormModel/newsletterFormReducer";

const NewsletterForm = ({ newsletterOptions, onSubmit }) => {
  const [model, dispatch] = useReducer(reducer, initialModel);

  useEffect(() => {
    dispatch(actions.setNewsletterOptions(newsletterOptions));
  }, [newsletterOptions]);

  const handleFieldChange = (change) => {
    dispatch(actions.changeField(change));
  };

  const handleSubmit = () => {
    const {
      fields: { fullName, newsletter },
    } = model;

    onSubmit({ fullName: fullName.value, newsletter: newsletter.value });
  };

  return (
    <View
      model={model}
      onFieldChange={handleFieldChange}
      onSubmit={handleSubmit}
    />
  );
};

export default NewsletterForm;
