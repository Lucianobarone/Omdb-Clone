const User = require("../models/Users");
const Favoritos = require("../models/Favoritos");

Favoritos.belongsTo(User);

module.exports = {
  Favoritos: Favoritos,
  User: User,
};
