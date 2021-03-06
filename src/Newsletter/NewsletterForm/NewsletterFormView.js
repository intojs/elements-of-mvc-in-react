import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  formField: {
    marginBottom: theme.spacing(3),
  },
}));

const NewsletterFormView = (props) => {
  const classes = useStyles();

  const {
    model: {
      isLoading,
      isValid,
      fields: { newsletter },
    },
    onFieldChange,
    onSubmit,
  } = props;

  const [selectedNewsletter, setSelectedNewsletter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  const handleFullNameChange = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;

    onFieldChange({ field: "fullName", value });
  };

  const handleNewsletterChange = (e) => {
    e.preventDefault();

    const {
      target: { value },
    } = e;

    setSelectedNewsletter(value);

    onFieldChange({ field: "newsletter", value });
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Subscribe to a newsletter
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          id="full-name"
          className={classes.formField}
          label="Full name"
          variant="filled"
          fullWidth
          required
          onChange={(e) => handleFullNameChange(e)}
        />

        <FormControl
          variant="filled"
          className={classes.formField}
          fullWidth
          required
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <InputLabel id="newsletter">Newsletter</InputLabel>
              <Select
                id="newsletter"
                value={selectedNewsletter}
                onChange={(e) => handleNewsletterChange(e)}
              >
                {newsletter.options.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterFormView;
