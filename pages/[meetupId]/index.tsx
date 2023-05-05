import MeetupDetail from "@/components/meetups/MeetupDetail";
import Image from "next/image";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title="A First Meetup"
      image="https://mediaim.expedia.com/destination/1/ac13a74176bac2e6435c3c8288c192d3.jpg"
      address="Some Street 5, 12345 Some City"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetails;
