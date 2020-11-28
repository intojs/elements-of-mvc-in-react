const isNewsletterFormModelValid = (model) => {
  const {
    fields: { fullName, newsletter },
  } = model;

  return !!(fullName.value && fullName.value.length > 2 && newsletter.value);
};

export default isNewsletterFormModelValid;
