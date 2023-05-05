import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

interface NewMeetupFormProps {
  onAddMeetup: (_: Meetup) => void;
}

const NewMeetupForm = ({ onAddMeetup }: NewMeetupFormProps) => {
  const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const descriptionInputRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
