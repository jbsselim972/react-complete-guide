import Image from "next/image";

import classes from "@/components/meetups/MeetupDetail.module.css";

const MeetupDetail = ({
  image,
  title,
  address,
  description,
}: Omit<Meetup, "id">) => {
  return (
    <section className={classes.detail}>
      <Image src={image} alt={title} width={500} height={500} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
