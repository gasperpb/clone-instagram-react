import React from 'react'
import Post from '../post/Post'
import classes from './posts.module.css'

const Posts = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Post />
            </div>
        </div>
    )
}

export default Posts