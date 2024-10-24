const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "uz",
    locales: ["en", "az", "kz", "uz", "ru"],
  },
  localePath: path.resolve("./public/locales"),
};
