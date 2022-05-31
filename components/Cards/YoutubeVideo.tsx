import { useState, useEffect } from 'react';
import { FunctionComponent } from "react";
import * as React from "react";


// const hasWindow = typeof window !== 'undefined';

// // // function handleResize() {
// // //   setWindowWidth(getWindowWidth());
// // // }

// // function getWindowWidth() {
// //     const width = hasWindow ? window.innerWidth : 500;
// //     return {
// //       width,
// //     };
// //   }

// // var [windowWidth, setWindowWidth] = useState(500);
// let windowWidth = 500

// useEffect(() => {
//     if (hasWindow) {
//       windowWidth = window.innerWidth
//     }
    
//   }, [hasWindow]);


// Define your component props

function componentDidMount() {
  windowWidth = window.innerWidth;
}

let windowWidth='500'

type YoutubeVideoProps = {
  youtubeDetails: {
    fields: {
      youtubeLink: string
    };
  };
};

// Add props
const YoutubeVideo: FunctionComponent<YoutubeVideoProps> = ({ youtubeDetails }) => {
  return (
    <div>
      <iframe src="https://www.youtube.com/embed/BBm8XjRG-II" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-screen h-[800px]'></iframe>
    </div>
  );
};

export default YoutubeVideo;

