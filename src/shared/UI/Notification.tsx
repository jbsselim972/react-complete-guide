import { FC } from "react";
import classes from "./Notification.module.css";

export type NotificationType = {
  title: string;
  message: string;
  status: string;
};

const Notification: FC<NotificationType> = ({ title, message, status }) => {
  let specialClasses = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  return (
    <section className={`${classes.notification} ${specialClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
