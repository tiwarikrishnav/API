const mongoose = require("mongoose");

const connectDb = () => {
  // return mongoose.connect(process.env.DB_url)
  return mongoose
    .connect(process.env.DB_URl_LIVE)
    .then((data) => {
      console.log(`Mongoose connected with server:${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
