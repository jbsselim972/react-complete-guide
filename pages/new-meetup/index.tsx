import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetup: Meetup) => {
    console.log(meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
