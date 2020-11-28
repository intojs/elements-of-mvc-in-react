const getSelectedNewsletter = (newsletters, code) =>
  newsletters.find((n) => n.code === code);

export default getSelectedNewsletter;
