import React from 'react';
import './PostBox.css';
import { Avatar } from '@material-ui/core';
import { ChatBubbleOutlineRounded, FavoriteBorderOutlined, Repeat } from '@material-ui/icons';
import { IosShareRounded } from '@mui/icons-material';


function PostBox({name, time, text}) {
    return (
        <div className="postBox">
            <div className="postBox__output">
                <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
                <div className="postBox__items">
                    <div className="userInfo">
                        <p className="userName">
                            {name}
                        </p>
                        <p className="timeTag">
                            1h
                        </p>
                    </div>
                    <p className="userContent">
                        {text}
                    </p>
                    <div className="postBox__option">
                            <ChatBubbleOutlineRounded className="postBox__icons"/>
                            <Repeat className="postBox__icons"/>
                            <FavoriteBorderOutlined className="postBox__icons"/>
                            <IosShareRounded className="postBox__icons"/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostBox