import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (firstname, lastname, email, phone, country, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          country: country,
          age: age,
          id: Math.random() * 101,
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <Header />
      <Form addUser={addUserHandler} />
      <List users={userList} />
    </React.Fragment>
  );
}

export default App;
