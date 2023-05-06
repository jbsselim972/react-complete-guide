import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { NextPage } from "next";
import React from "react";

const NewMeetupPage: NextPage = () => {
  const addMeetupHandler = async (meetup: Meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
