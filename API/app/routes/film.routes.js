module.exports = app => {
  const film = require("../controllers/film.controller.js");

  var router = require("express").Router();

  router.get("/", film.findAll);

  router.post("/", film.create);

  router.post("/import", film.import);

  router.delete("/:id", film.delete);

  app.use('/api/films', router);
};
