import React from "react";

const VideoSection = () => {
  return (
    <>
      <section
        id="vedio"
        className="vedio-area pt-120 pb-90 fix"
        style={{
          backgroundImage: "url(img/video/vedio-bg.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align text-center">
                <h5>Watch Us</h5>
                <h2>Start Growing With Community</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div
                className="video-img wow fadeInRight animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
                style={{
                  backgroundImage: "url(img/video/vedio-img.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=gyGsPlt06bo"
                  className="video-i popup-video"
                >
                  <img
                    src="img/video/play.svg"
                    alt="img"
                    className="active-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
