import Head from "next/head";
import React from "react";
import { useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "next/package.json";

const Chat = () => {
  // Make request to server to get port
  // Create websocket with port
  // Get video and sound simultaneously
  // Segment video and sound
  // Send video and sound via port
    
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        
        console.log(video)
        video.play();
        
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <div>
        <button>BUTTON</button>
        <video ref={videoRef} />
      </div>
    </div>
  );
};
  
export default Chat;