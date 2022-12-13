import React from "react";
import classes from "./stories.module.css";
import Story from "../story/Story";

const Stories = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Story />
                <Story />
                <Story />
            </div>
        </div>
    );
};

export default Stories;