import MeetupDetail from "@/components/meetups/MeetupDetail";
import { GetStaticProps } from "next";

const MeetupDetails = ({ meetupData }: { meetupData: Meetup }) => {
  return <MeetupDetail {...meetupData} />;
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://mediaim.expedia.com/destination/1/ac13a74176bac2e6435c3c8288c192d3.jpg",
        address: "Some Street 5, 12345 Some City",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupDetails;
