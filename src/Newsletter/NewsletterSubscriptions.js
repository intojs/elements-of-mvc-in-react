import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import useNewsNewsletterSubscriptions from "./NewsletterSubscriptionsContext";

const NewsletterSubscriptions = () => {
  const [subscriptions] = useNewsNewsletterSubscriptions();

  return (
    <div>
      <Typography variant="h6">Newsletter subscriptions</Typography>
      <List>
        {subscriptions.map(({ id, fullName, newsletter: { name } }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <CheckIcon color="primary" />
            </ListItemAvatar>
            <ListItemText>
              {fullName} - {name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NewsletterSubscriptions;
