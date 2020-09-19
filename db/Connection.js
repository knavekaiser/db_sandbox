const mongoose = require("mongoose");
const URI =
  "mongodb+srv://admin:c69NC4dDb0kMqNfFSiKgOT1LBJEPDr8T@data.kdfn8.gcp.mongodb.net/data?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to DB");
};
module.exports = connectDB;
