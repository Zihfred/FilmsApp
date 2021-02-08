const db = require("../models");
const Film = db.films;


exports.create = (req, res) => {

  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const film = new Film({
    title: req.body.title || "",
    release: req.body.release || "",
    format: req.body.format || "",
    stars: req.body.stars || []
  });


  film
    .save(film)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Film."
      });
    });
};


exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Film.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films."
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Film.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete film with id=${id}. Maybe Film was not found!`
        });
      } else {
        res.send({
          message: "Film was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Film with id=" + id
      });
    });
};

exports.import = (req,res) => {
  Film.deleteMany().then((data) => {
    console.log(req)
    res.send({
      message: "Film was deleted successfully!"
    });
  })

}


