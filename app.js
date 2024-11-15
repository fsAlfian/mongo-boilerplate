require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { main } = require("./config/db");

main();
app.use(express.urlencoded({ extended: false }));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
