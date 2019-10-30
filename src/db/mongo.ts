import { MongoClient } from "mongodb";

let mongoConnection: MongoClient | undefined;
function mongo(): Promise<MongoClient> {
  if (!mongoConnection) {
    const mongoUrl = process.env.MONGO_URL
      ? process.env.MONGO_URL
      : "mongodb://localhost:27017/";
    return new Promise((resolve, reject) =>
      MongoClient.connect(mongoUrl, (err, db) => {
        if (err) {
          reject(err);
          return;
        }
        mongoConnection = db;
        resolve(db);
      }),
    );
  }
  return Promise.resolve(mongoConnection);
}

export function DB() {
  return mongo().then((db) => db.db("database"));
}
