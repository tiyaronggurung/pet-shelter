const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pet name must be at least 3 characters!"],
  },
  type: { 
    type: String, 
    required: [true, "Pet type must be at least 3 characters!"] },
  description: {
    type: String,
    required: [true, "Pet description must be at least 3 characters!"],
  },
  skills: { type: Array },
},{ timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);
