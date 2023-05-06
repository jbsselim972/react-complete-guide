import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = ({ meetupData }: { meetupData: Meetup }) => {
  return <MeetupDetail {...meetupData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mongoUrl = process.env.MONGO_URI!;
  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupsIds = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  console.log(meetupsIds);
  client.close();
  return {
    fallback: false,
    paths: meetupsIds.map((meetupId) => ({
      params: { meetupId: meetupId._id.toString() },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params!.meetupId as string;
  const mongoUrl = process.env.MONGO_URI!;
  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: meetupData?._id.toString(),
        title: meetupData?.title,
        image: meetupData?.image,
        address: meetupData?.address,
        description: meetupData?.description,
      },
    },
  };
};

export default MeetupDetails;
