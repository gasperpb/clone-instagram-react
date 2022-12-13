import React from "react";
import classes from "./post.module.css";
import person from "../../assets/logo.jpg";
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import { FaRegComment, FaSmile, FaSmileBeam } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";

const Post = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                {/* left */}
                <div className={classes.top}>
                    <img className={classes.profileImg} src={person} alt="" />
                    <span>Achilles Dev</span>
                </div>
                {/* img */}
                <div className={classes.center}>
                    <img src={person} className={classes.postImg} alt="" />
                </div>
                {/* comment section */}
                <div className={classes.bottom}>
                    {/* emojis */}
                    <div className={classes.emojis}>
                        <div className={classes.leftSideEmojis}>
                            <AiOutlineHeart size={30} />
                            <FaRegComment size={30} />
                            <FiSend size={30} />
                        </div>
                        <div className={classes.rightSideEmojis}>
                            <BsBookmark size={30} />
                        </div>
                    </div>
                    {/* likes */}
                    <div className={classes.likes}>
                        <span className={classes.numLikes}>3,776</span>
                        <p>likes</p>
                    </div>
                    {/* description */}
                    <div className={classes.descriptionContainer}>
                        <span className={classes.username}>Achilles Dev: </span>
                        <p className={classes.description}>Do you like my post?</p>
                    </div>
                    {/* comment section */}
                    <div className={classes.commentSection}>
                        <span className={classes.viewComments}>View all 15 comments</span>
                        <div className={classes.comments}>
                            <div className={classes.comment}>
                                <span className={classes.commentUsername}>Clarice</span>
                                <p className={classes.commentText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Pariatur accusantium eaque rerum error quae, quam iste vitae
                                    dicta ullam maxime quibusdam, exercitationem temporibus
                                    voluptates mollitia rem beatae aspernatur est praesentium.
                                </p>
                                <AiOutlineHeart className={classes.emojiComment} />
                            </div>
                        </div>
                        <span className={classes.timeAgo}>12 hours ago</span>
                    </div>
                    {/* comment input*/}
                    <div className={classes.commentInput}>
                        <AiOutlineSmile size={30} />
                        <input type="text" placeholder="Add a comment..." />
                        <span className={classes.postBtn}>Post</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;