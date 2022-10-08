import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Profile from "./Pages/Profile/Profile";
import { Route, Switch, useParams } from "react-router-dom";

function App() {
  const [userList, setUserList] = useState([]);
  const { profileId } = useParams();
  // useEffect(() => {
  //   const infoProfile = userList.filter(
  //     (item) => item.id === Number(profileId)
  //   )[0];
  //   setUserList(infoProfile);
  // }, []);

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
      <Switch>
        <Route path="/" exact>
          <Form addUser={addUserHandler} />
          <List users={userList} />
        </Route>
        <Route path="/profile/:profileId" exact>
          <Profile />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
