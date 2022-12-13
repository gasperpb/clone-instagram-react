import React from "react";
import classes from "./story.module.css";
import person from "../../assets/logo.jpg";

const Story = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.story}>
                    <img src={person} alt="" className={classes.img} />
                    <span className={classes.username}>Achilles</span>
                </div>
            </div>
        </div>
    );
};

export default Story;