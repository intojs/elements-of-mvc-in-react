import React, { createContext, useContext, useState } from "react";

const Context = createContext([]);

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

const NewsletterSubscriptionsProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const addSubscription = (newSubscription) => {
    if (isAlreadyAdded(subscriptions, newSubscription)) {
      return;
    }

    setSubscriptions([...subscriptions, addId(subscriptions, newSubscription)]);
  };

  return (
    <Context.Provider value={[subscriptions, addSubscription]}>
      {children}
    </Context.Provider>
  );
};

export const useNewsletterSubscriptionsContext = () => useContext(Context);

export default NewsletterSubscriptionsProvider;
