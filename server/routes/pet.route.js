const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/api/pets", PetController.getPets);
  app.get("/api/pets/:id", PetController.getPet);
  app.post("/api/pets", PetController.createPet);
  app.delete("/api/pets/:id", PetController.deletePet);
  app.put("/api/pets/:id", PetController.updatePet);
};
