import React, { useCallback, useEffect, useState } from "react";
import getNewsletters from "../getNewsletters";
import NewsletterForm from "../NewsletterForm";
import getSelectedNewsletter from "./getSelectedNewsletter";
import toNewsletterOption from "./toNewsletterOption";
import { useNewsletterSubscriptionsContext } from "../NewsletterSubscriptionsProvider";

const NewsletterFormAdapter = () => {
  const [, addSubscription] = useNewsletterSubscriptionsContext();
  const [newsletters, setNewsletters] = useState([]);

  const getNewslettersFromApi = useCallback(async () => {
    setNewsletters(await getNewsletters());
  }, []);

  useEffect(() => {
    getNewslettersFromApi();
  }, [getNewslettersFromApi]);

  const handleSubmit = (fields) => {
    const { fullName, newsletter } = fields;

    addSubscription({
      fullName,
      newsletter: getSelectedNewsletter(newsletters, newsletter),
    });
  };

  return (
    <NewsletterForm
      newsletterOptions={newsletters.map(toNewsletterOption)}
      onSubmit={handleSubmit}
    />
  );
};

export default NewsletterFormAdapter;
