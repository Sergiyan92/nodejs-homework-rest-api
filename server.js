const mongoose = require("mongoose");

const app = require("./app");
const DB_HOST =
  "mongodb+srv://Serhii:wienAfbexAvGAo0R@cluster0.dd74dqt.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
