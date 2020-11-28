import React from "react";
import Model from "./NewsletterFormModel";
import View from "./NewsletterFormView";

const NewsletterForm = () => {
  const MVVM = Model(View);

  return <MVVM />;
};

export default NewsletterForm;
