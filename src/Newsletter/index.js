import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { NewsletterSubscriptionsContextProvider as ContextProvider } from "./NewsletterSubscriptionsContext";
import NewsletterForm from "./NewsletterForm";
import NewsletterSubscriptions from "./NewsletterSubscriptions";

const Newsletter = () => (
  <ContextProvider>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <NewsletterForm />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <NewsletterSubscriptions />
      </Grid>
    </Grid>
  </ContextProvider>
);

export default Newsletter;
