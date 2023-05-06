import { MongoClient } from "mongodb";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const mongoUrl = process.env.MONGO_URI!;
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(req.body);

    console.log(result);
    client.close();
    return res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
