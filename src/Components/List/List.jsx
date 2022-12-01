import React from "react";
import Card from "../Card/Card";
import classes from "./List.module.css";
import Button from "../Button/Button";

const List = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <div key={user.id} className={classes.profile}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${user.id}.svg`}
                alt=""
              />
              <div className={classes.list}>
                <li>
                  <span>Id : </span> {user.id}
                </li>
                <li>
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
                  <span>Age :</span> {user.age}
                </li>
              </div>
              <Button className={classes.button}>Delete</Button>
            </div>
          ))}
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default List;
