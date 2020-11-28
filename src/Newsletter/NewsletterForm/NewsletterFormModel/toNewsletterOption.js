const toNewsletterOption = (newsletter) => {
  const { code, name } = newsletter;

  return {
    label: name,
    value: code,
  };
};

export default toNewsletterOption;
