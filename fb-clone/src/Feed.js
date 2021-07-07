import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            
            {/* StoryReel */}
            <StoryReel></StoryReel>

            {/* MessangeSender */}
            <MessageSender></MessageSender>

            <Post
            profilePic="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            message="Test"
            timestamp="07:07:07"
            username="Matej"
            image="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-600w-1365289022.jpg"
            
            ></Post>
            <Post></Post>
            <Post></Post>
            
        </div>
    )
}

export default Feed
