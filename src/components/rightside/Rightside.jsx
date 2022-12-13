import React from "react";
import classes from "./rightside.module.css";
import person from "../../assets/logo.jpg";

const Rightside = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.user}>
                    <img src={person} alt="" className={classes.userImg} />
                    <div className={classes.userInfo}>
                        <span className={classes.fullName}>Achilles Dev</span>
                        <span className={classes.firstName}>Achilles</span>
                    </div>
                </div>
                <p className={classes.suggestedForYouMsg}>Suggestions for you</p>
                <div className={classes.suggestedUsers}>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                    <div className={classes.suggestedUser}>
                        <div className={classes.leftSide}>
                            <img src={person} alt="" className={classes.suggestedUserImg} />
                            <span className={classes.suggestedUserName}>Ivan</span>
                        </div>
                        <div className={classes.followBtn}>Follow</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightside;