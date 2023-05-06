import React from "react";
import { MongoClient } from "mongodb";
import { GetStaticProps, NextPage } from "next";
import MeetupList from "@/components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://mediaim.expedia.com/destination/1/ac13a74176bac2e6435c3c8288c192d3.jpg",
    address: "Some Address",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://mediaim.expedia.com/destination/1/ac13a74176bac2e6435c3c8288c192d3.jpg",
    address: "Some Address2",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://mediaim.expedia.com/destination/1/ac13a74176bac2e6435c3c8288c192d3.jpg",
    address: "Some Address3",
  },
];

const HomePage: NextPage<{ meetups: Meetup[] }> = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const mongoUrl = process.env.MONGO_URI!;
  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = async (context: BaseContext) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: MEETUPS,
//     }
//   }
// }

export default HomePage;
