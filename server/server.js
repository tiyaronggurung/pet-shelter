const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/pet.route")(app);
require("./config/mongoose.config");
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
