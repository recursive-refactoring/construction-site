import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import SlideDown from "../../utils/animations/slideDown";
import ModalVideo from "react-modal-video";

const VideoArea = ({ bg_img }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className={`video-area bg-image section-padding ${bg_img}`}>
        <div className="container">
          <div className="video-popup mx-auto" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-play">
              <FaPlay />
            </i>
          </div>
          <SlideDown delay={2}>
            {" "}
            <h2 className="pt-65">
              we take pride in delivering top-quality construction services with
              precision and reliability.
            </h2>
          </SlideDown>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Za5yQgQYWBM"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoArea;
