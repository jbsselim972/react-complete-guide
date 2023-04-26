import classes from "./SimpleInput.module.css";

const BasicForm = (props) => {
  return (
    <div className={classes.app}>
      <form>
        <div className={classes["control-group"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" />
        </div>
        <div className={classes["form-control"]}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
