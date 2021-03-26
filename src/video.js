import React from 'react';
import './App.css';

function Video(){
    return (
        <div className="videoDisplay">

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/g9Fh2AImW5k" title="What Does Google Know About Us?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
<video src="https://www.youtube.com/watch?v=g9Fh2AImW5k">
            </video>
</iframe>
        </div>
    );
}

export default Video;