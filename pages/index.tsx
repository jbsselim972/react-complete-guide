import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import React from "react";

const HomePage = () => {
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
  return <MeetupList meetups={MEETUPS} />;
};

export default HomePage;
