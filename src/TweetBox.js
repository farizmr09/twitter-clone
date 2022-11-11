import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox({tweet, setTweet, addTweet}) {

  

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
              <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
              <input placeholder="What's happening?" type="text" onChange={(e) => setTweet(e.target.value)} value={tweet}/>
            </div>
            <Button variant={"outlined"} className="tweetBox__tweet" onClick={addTweet}>Tweet</Button>
        </form>
        <div className="tweetBox__option">

        </div>
    </div>
  )
}

export default TweetBox