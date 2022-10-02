import React, { useState } from "react";
import classes from "./Form.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
const Form = (props) => {
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitChangeHandler = (event) => {
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
    setEnteredFirstname("");
    setEnteredLastname("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredCountry("");
    setEnteredAge("");
  };

  const firstnameChangeHandler = (event) => {
    setEnteredFirstname(event.target.value);
  };
  const lastnameChangeHandler = (event) => {
    setEnteredLastname(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const countryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
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
        <input
          value={enteredFirstname}
          onChange={firstnameChangeHandler}
          id="firstname"
          type="text"
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          value={enteredLastname}
          onChange={lastnameChangeHandler}
          id="lastname"
          type="text"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          id="email"
          type="text"
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          value={enteredPhone}
          onChange={phoneChangeHandler}
          id="phone"
          type="number"
        />
        <label htmlFor="country">Country:</label>
        <input
          value={enteredCountry}
          onChange={countryChangeHandler}
          id="country"
          type="text"
        />
        <label htmlFor="date">Age :</label>
        <input
          value={enteredAge}
          onChange={dateChangeHandler}
          id="Age"
          type="number"
        />
        <Button type="submit">Add User</Button>
        <Button type="submit">Cancel</Button>
      </form>
    </Card>
  );
};

export default Form;
