import classes from "./navbar.module.css"
import React from 'react'
import logo from "../../assets/logo.jpg"
import { AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai"
import { FiSend } from 'react-icons/fi'
const Navbar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img src={logo} className={classes.logo} alt="" />
                </div>
                <div className={classes.center}>
                    <input type="text" className={classes.searchinput} placeholder="Search" />
                    <AiOutlineSearch className={classes.icon} />
                </div>
                <div className={classes.right}>
                    <AiFillHome />
                    <AiOutlineCompass />
                    <AiOutlineHeart />
                    <FiSend />
                </div>
            </div>
        </div>
    )
}

export default Navbar