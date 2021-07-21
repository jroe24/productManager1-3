const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// Require Files
require("./config/mongoose.config");


// Configure Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/product.route")(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));