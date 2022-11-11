import React, { useState, useEffect, useReducer } from 'react';
import './Feed.css';
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from './config/FirebaseConfig'
import TweetBox from './TweetBox';
import PostBox from './PostBox';


function Feed({email}) {
  const [tweet, setTweet] =  useState('')
  const [postBoxList, setPostBoxList] = useState([])
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  // function handleClick() {
    
  // }
  // Fetch the postBoxList from firebase first when starting the app.
  // const updatePost = (newPost) => {
  //   // Update the firebase database everytime this function is called.
  //   setPostBoxList([newPost, ...postBoxList])
  // }

  const fetchData = async ()=> {
        await getDocs(collection(db, "tweet"))
            .then((querySnapshot) => {
              querySnapshot.forEach(element => {
                var data = element.data();
                setPostBoxList(arr => [...arr , data]);
                console.log(data);
                
             });
            })
  }

  const addTweet = async (e) => {
    e.preventDefault();  
    if(tweet === '') {return}
    try {
        const docRef = await addDoc(collection(db, "tweet"), {
          key: Math.random(),
          email: email,
          tweet: tweet,    
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      forceUpdate();
      setTweet('');
  }

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="feed">
        {/* header */}
        <h2 className="feed__header">Home</h2>

        {/* tweet box */}
        <TweetBox tweet={tweet} setTweet={setTweet} addTweet={addTweet}/>
        
        {/* posts */}
        {postBoxList.map(post => (<PostBox key={post.key} name={post.email} time={post.time} text={post.tweet}/>))}
    </div>
  )
}

export default Feed