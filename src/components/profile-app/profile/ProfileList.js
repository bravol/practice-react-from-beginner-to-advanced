import React from "react";
import Profile from "./Profile";
import styles from "./ProfileList.module.css";
import { profiles } from "../../../pages/profile-app/profile-data";
import Card from "../UI/card/Card";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
          {profiles.map((profile, index) => {
            const { img, name, job, company, link } = profile;
            return (
              <Card key={index} className={styles.card}>
                <Profile
                  image={img}
                  name={name}
                  job={job}
                  company={company}
                  link={link}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
