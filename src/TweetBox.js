import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox({postBoxList, updatePost}) {
  const [tweet, setTweet] =  useState('')
  
  const handleChange = (event) => {
    setTweet(event.target.value)
    // console.log(tweet)
  }

  // const handleKey = (event) => {
  //   console.log('here')
  //   if(event.onKeyDown === 'Enter') {
  //     clearField()
  //   }
  // }

  const clearField = () => {
    tweet !== '' ? updatePost({key:postBoxList.length, name:"test 69420", tag:"richest_man", time:"1", text:tweet}) : console.log("nothing to tweet");
    console.log(postBoxList)
    setTweet('')
  }

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
              <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
              <input placeholder="What's happening?" type="text" onChange={handleChange} value={tweet}/>
            </div>
            <Button variant={"outlined"} className="tweetBox__tweet" onClick={clearField}>Tweet</Button>
        </form>
        <div className="tweetBox__option">

        </div>
    </div>
  )
}

export default TweetBox