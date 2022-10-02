import React from "react";
import Card from "../Card/Card";
import classes from "./List.module.css";
import Button from "../Button/Button";
const List = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <div className="profile">
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${user.email}.svg`}
              alt=""
            />
            <div className={classes.list}>
              <li key={user.id}>
                <span>Fullname :</span> {user.firstname} {user.lastname}
              </li>
              <li>
                <span>Email-Address :</span> {user.email}
              </li>
              <li>
                <span>Phone-Number :</span> {user.phone}
              </li>
              <li>
                <span>Country :</span> {user.country}
              </li>
              <li>
                {" "}
                <span>Age :</span> {user.age}
              </li>
            </div>
            <Button className={classes.button}>View Profile</Button>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default List;
