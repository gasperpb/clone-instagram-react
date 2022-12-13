import React from 'react'
import Posts from '../posts/Posts'
import Stories from '../stories/Stories'
import classes from './leftside.module.css'

const LeftSide = () => {
    return (
        <div className={classes.container}>
            <Stories />
            <Posts />
        </div>
    )
}

export default LeftSide