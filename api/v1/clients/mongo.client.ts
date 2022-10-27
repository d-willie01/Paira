import mongoose from "mongoose";

export const init = () => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log(err.message);
  });
  db.once("open", () => {
    console.log("succefully connected to mongodb");
  });
};
