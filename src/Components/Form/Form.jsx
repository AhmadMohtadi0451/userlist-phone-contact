import React, { useState, useRef } from "react";
import classes from "./Form.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import { Link } from "react-router-dom";

const Form = (props) => {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const countryInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const submitChangeHandler = (event) => {
    const enteredFirstname = firstnameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    event.preventDefault();
    if (
      enteredFirstname.trim().length === 0 ||
      enteredLastname.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredCountry.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Fill inputs",
      });
      return;
    }
    if (+enteredAge < 18) {
      setError({
        title: "Invalid Age",
        message: "You are not old enough",
      });
      return;
    }
    props.addUser(
      enteredFirstname,
      enteredLastname,
      enteredEmail,
      enteredPhone,
      enteredCountry,
      enteredAge
    );
    firstnameInputRef.current.value = "";
    lastnameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneInputRef.current.value = "";
    countryInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      <Card className={classes.input}>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onHandlerError={errorHandler}
          />
        )}
        <form onSubmit={submitChangeHandler} action="">
          <label htmlFor="firstname">Firstname:</label>
          <input id="firstname" type="text" ref={firstnameInputRef} />
          <label htmlFor="lastname">Lastname:</label>
          <input id="lastname" type="text" ref={lastnameInputRef} />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" ref={emailInputRef} />
          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="number" ref={phoneInputRef} />
          <label htmlFor="country">Country:</label>
          <input id="country" type="text" ref={countryInputRef} />
          <label htmlFor="date">Age :</label>
          <input id="Age" type="number" ref={ageInputRef} />
          {/* <Link to="/"> */}
          <Button type="submit">Add User</Button>
          {/* </Link> */}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Form;
