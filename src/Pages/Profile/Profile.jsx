import React from "react";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const params = useParams();
  console.log(params.profileId);
  return (
    <React.Fragment>
      <h2>hi there</h2>
    </React.Fragment>
  );
};

export default Profile;
