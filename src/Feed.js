import React, { useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import PostBox from './PostBox';

function Feed() {
  
  const [postBoxList, setPostBoxList] = useState([])
  // Fetch the postBoxList from firebase first when starting the app.

  const updatePost = (newPost) => {
    // Update the firebase database everytime this function is called.
    setPostBoxList([newPost, ...postBoxList])
  }

  return (
    <div className="feed">
        {/* header */}
        <h2 className="feed__header">Home</h2>

        {/* tweet box */}
        <TweetBox postBoxList={postBoxList} updatePost={updatePost}/>
        
        {/* posts */}
        {postBoxList.map(post => (<PostBox key={post.key} name={post.name} tag={post.tag} time={post.time} text={post.text}/>))}
    </div>
  )
}

export default Feed