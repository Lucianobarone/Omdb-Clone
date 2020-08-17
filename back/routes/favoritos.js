const express = require("express");
const router = express.Router();
const { Favoritos } = require("../models");

router.post("/agregar",  (req, res, next)=> {
  Favoritos.create({
    Title: req.body.Title,
    Poster: req.body.Poster,
  }).then((data) => {
    console.log(data);
    const user = req.body.user;
    data.setUser(user);
    res.sendStatus(200);
  });
});

router.get("/todos/:id",  (req, res, next)=> {
  Favoritos.findAll({
    where: {
      userId:Number(req.params.id),
    },
  })
  .then(data => res.json(data));
});



router.delete("/delete/:id",  (req, res, next)=> {
  Favoritos.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => res.sendStatus(204));
});

module.exports = router;
