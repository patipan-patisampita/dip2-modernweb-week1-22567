import * as mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    const mongoCon: any = process.env.MONGO_DB_URI;
    await mongoose.connect(mongoCon);
    console.log("Connected to MongDB");
  } catch (error) {
    console.log(error);
  }
}
