import { useState, useEffect } from 'react';
import { FunctionComponent } from "react";
import * as React from "react";



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
      <iframe src="https://www.youtube.com/embed/BBm8XjRG-II" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full h-[800px]'></iframe>
    </div>
  );
};

export default YoutubeVideo;

