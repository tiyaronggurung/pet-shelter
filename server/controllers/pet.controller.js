const Pet = require("../models/pet.model");

const createPet = (req, res) => {
  Pet.create(req.body)

    .then((pet) => { 
      res.json(pet);
    })
    .catch((err) => res.status(400).json(err));
};

const getPets = (req, res) => {
  Pet.find()
  .then((allPets) => {
    res.json(allPets);
  })
  .catch((err) => res.status(400).json(err));
};

const deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => err.status(400).json(err));
};
const updatePet = (req, res) => {
  Pet.findByIdAndUpdate( {_id: req.params.id}, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => {
      res.json(updatedPet);
    })
    .catch((err) => res.status(400).json(err));
};

const index = ({ req, res }) => {
  res.json({
    message: "Pet Controller",
  });
};

const getPet = (req, res) => {
  Pet.findById(req.params.id, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};

const getPetByType = (req, res) => {
  Pet.find({ type: req.params.type }, (err, pet) => {
    if (err) {
      res.send(err);
    }
    res.json(pet);
  });
};


module.exports = { createPet, getPet, getPets, deletePet,updatePet,index, getPetByType};