const getNewsletters = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          code: "christmasSpecials",
          name: "Christmas Specials 2020",
        },
        {
          code: "springSpecials",
          name: "Spring Specials 2021",
        },
        {
          code: "bestDeals",
          name: "Best deals",
        },
      ]);
    }, 500);
  });

export default getNewsletters;
