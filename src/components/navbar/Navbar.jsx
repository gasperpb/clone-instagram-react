import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/instalogo.png";
import person from "../../assets/logo.jpg"

import {
    AiOutlineSearch,
    AiFillHome,
    AiOutlineCompass,
    AiOutlineHeart,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img src={logo} alt="" className={classes.logo} />
                </div>
                <div className={classes.center}>
                    <input className={classes.searchInput} type="text" placeholder="Search..." />
                    <AiOutlineSearch className={classes.icon} />
                </div>
                <div className={classes.right}>
                    <AiFillHome className={classes.icon} />
                    <AiOutlineCompass className={classes.icon} />
                    <AiOutlineHeart className={classes.icon} />
                    <FiSend className={classes.icon} />
                    <div className={classes.profilePicContainer}>
                        <img src={person} alt="" className={classes.profilePicImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;