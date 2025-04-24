import React from "react";
import "./styles.css";
import image from "./how_it_works.png";

export const Head = ({ props }) => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="recommendation" style={{ color: "#1F2A40" }}>
            <h2>Customer Loyalty Program</h2>
          </div>
          <div className="title">
            <h2 className="col">Aurora Personalized Rewards</h2>
          </div>
          <div className="subtitle">
            <h4 className="col">
              Elevate every customer experience with AI-powered personalization
            </h4>
          </div>
          <div className="button-container">
            <button
              className="start-button"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Get started with Aurora Rewards
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="content2">
          <div className="why-title">
            <h2 className="col">Why Aurora Rewards?</h2>
          </div>
          <div className="why-content" style={{ alignItems: "start" }}>
            <p style={{ marginTop: "0px" }}>
              Amazon Personalize ensures customer retention by enhancing the
              customer experience through AI-powered personalization. By
              leveraging the Amazon Personalize recommendation engine,
              businesses can deliver hyper-personalized user experiences in
              real-time and at scale. This leads to improved user engagement,
              increased customer loyalty, and better business results, all of
              which are critical factors in retaining customers.
            </p>

            <div className="image-container">
              <img
                style={{ height: "300px", width: "635px" }}
                src={image}
                alt="How it works"
              />
            </div>

            {/* <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
