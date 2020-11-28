import React, { createContext, useContext, useState } from "react";

export const NewsletterSubscriptionsContext = createContext([]);

const addId = (subscriptions, subscription) => ({
  id: subscriptions.length + 1,
  ...subscription,
});

const isAlreadyAdded = (subscriptions, newSubscription) =>
  subscriptions.reduce((exists, s) => {
    if (
      s.fullName === newSubscription.fullName &&
      s.newsletter.code === newSubscription.newsletter.code
    ) {
      return true;
    }
    return exists;
  }, false);

export const NewsletterSubscriptionsContextProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const addSubscription = (newSubscription) => {
    if (isAlreadyAdded(subscriptions, newSubscription)) {
      return;
    }

    setSubscriptions([...subscriptions, addId(subscriptions, newSubscription)]);
  };

  return (
    <NewsletterSubscriptionsContext.Provider
      value={[subscriptions, addSubscription]}
    >
      {children}
    </NewsletterSubscriptionsContext.Provider>
  );
};

const useNewsNewsletterSubscriptions = () =>
  useContext(NewsletterSubscriptionsContext);

export default useNewsNewsletterSubscriptions;
