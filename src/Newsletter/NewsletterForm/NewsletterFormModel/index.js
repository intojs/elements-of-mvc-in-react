import React, { useCallback, useEffect, useReducer, useState } from "react";
import NewsletterApi from "../../NewsletterApi";
import actions from "./NewsletterFormActions";
import InitialModel from "./InitialModel";
import reducer from "./newsletterFormReducer";
import toNewsletterOption from "./toNewsletterOption";
import useNewsNewsletterSubscriptions from "../../NewsletterSubscriptionsContext";
import getSelectedNewsletter from "./getSelectedNewsletter";

const NewsletterFormModel = (View) =>
  function Form() {
    const [, addSubscription] = useNewsNewsletterSubscriptions();
    const [model, dispatch] = useReducer(reducer, InitialModel);
    const [newsletters, setNewsletters] = useState([]);

    const getNewsletters = useCallback(async () => {
      dispatch(actions.getNewsletters());

      const fetchedNewsletters = await NewsletterApi.getNewsletters();

      setNewsletters(fetchedNewsletters);

      dispatch(
        actions.getNewslettersSuccess(
          fetchedNewsletters.map(toNewsletterOption)
        )
      );
    }, []);

    useEffect(() => {
      getNewsletters();
    }, [getNewsletters]);

    const handleFieldChange = (change) => {
      dispatch(actions.changeField(change));
    };

    const handleSubmit = () => {
      const {
        fields: {
          fullName,
          newsletter: { value },
        },
      } = model;

      addSubscription({
        fullName: fullName.value,
        newsletter: getSelectedNewsletter(newsletters, value),
      });
    };

    return (
      <View
        model={model}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
    );
  };

export default NewsletterFormModel;
