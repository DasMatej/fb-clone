
import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}

            <Story 
            image='https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/mediacentre/pressreleases/2018/10/maxresdefault.jpg'
            profileSrc='https://scontent.fskp4-1.fna.fbcdn.net/v/t1.18169-9/14344052_1146655342046832_8427097283497670021_n.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=1QcKodkET3UAX8U0EV_&_nc_ht=scontent.fskp4-1.fna&oh=437f5ba5e39a67d1a7ef88ee808d2ba2&oe=60E8B60A'
            title="Ivka Slivka and Marthy"></Story>
            <Story 
            image='https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png'
            profileSrc='https://scontent.fskp4-1.fna.fbcdn.net/v/t31.18172-8/15844223_1536996442994643_7564736100758685287_o.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=EZOzfB6GgxwAX8UeBEE&_nc_ht=scontent.fskp4-1.fna&oh=e75a5c039737d65e6f64d63511e6357f&oe=60E89C42'
            title="Ivka x Joki x Marthy"></Story>
            <Story 
            image='https://scontent.fskp4-2.fna.fbcdn.net/v/t1.18169-9/15622766_1523140464380241_4534742049289966086_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=174925&_nc_ohc=HGb8LxHet6YAX8xl_CR&_nc_ht=scontent.fskp4-2.fna&oh=d44c87f618a2983a78249a8b66ce0fbc&oe=60E883F4'
            profileSrc='https://scontent.fskp4-2.fna.fbcdn.net/v/t1.18169-9/15622766_1523140464380241_4534742049289966086_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-3&_nc_sid=174925&_nc_ohc=HGb8LxHet6YAX8xl_CR&_nc_ht=scontent.fskp4-2.fna&oh=d44c87f618a2983a78249a8b66ce0fbc&oe=60E883F4'
            title="Doggo"></Story>

        </div>
    )
}

export default StoryReel
