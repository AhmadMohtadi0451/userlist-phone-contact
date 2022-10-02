import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

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
          id: Math.random().toString() * 100,
        },
      ];
    });
  };
  return (
    <div>
      <Form addUser={addUserHandler} />
      <List users={userList} />
    </div>
  );
}

export default App;
