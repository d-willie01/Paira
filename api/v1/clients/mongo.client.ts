import mongoose from "mongoose";

export const init = () => {
  const mongooseConnectionOptions: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  };
  mongoose.connect(process.env.MONGO_CONNECTION_STRING as string, mongooseConnectionOptions);
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log(err.message);
  });
  db.once("open", () => {
    console.log("succefully connected to mongodb");
  });
};
