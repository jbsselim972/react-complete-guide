import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup: Meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add New Meetup | React Meetups</title>
        <meta
          name="description"
          content="Add a new meetup and share it with others"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetupPage;
