import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import NewsletterSubscriptionsProvider from "./NewsletterSubscriptionsProvider";
import NewsletterFormAdapter from "./NewsletterFormAdapter";
import NewsletterForm from "./NewsletterForm";
import NewsletterSubscriptions from "./NewsletterSubscriptions";

const Newsletter = () => {
  return (
    <NewsletterSubscriptionsProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box pt={4} pb={4}>
            <NewsletterFormAdapter>
              <NewsletterForm />
            </NewsletterFormAdapter>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <NewsletterSubscriptions />
        </Grid>
      </Grid>
    </NewsletterSubscriptionsProvider>
  );
};

export default Newsletter;
