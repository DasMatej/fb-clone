import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {

    const[input, setInput] = useState('');
    const[imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        //database Stuff

        setInput("");
        setImageUrl("");
    }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input className="messageSender__input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder={"Whats on your mind?"}></input>

                    <input
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    type="text" 
                    placeholder={"image URL (Optional)"}></input>
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}}></VideocamIcon>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color: "green"}}></PhotoLibraryIcon>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color: "orange"}}></InsertEmoticonIcon>
                    <h3>Feeling/Activity</h3>
                </div>
                
            </div>
            
        </div>
    )
}

export default MessageSender
