const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all(results =>
    res.render("index", { burgers: results })
  );
});


router.post("/api/burgers", (req, res) => {
  burger.create({ burger_name: req.body.burger_name }, results => {
    if (results.affectedRows === 0) {
      return res.status(500).end();
    }
    res.status(200).end();
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.body, req.params.id, results => {

    if (results.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;