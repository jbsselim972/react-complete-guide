import Head from "next/head";
import { MongoClient } from "mongodb";
import { GetStaticProps, NextPage } from "next";
import MeetupList from "@/components/meetups/MeetupList";

const HomePage: NextPage<{ meetups: Meetup[] }> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of React meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
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
