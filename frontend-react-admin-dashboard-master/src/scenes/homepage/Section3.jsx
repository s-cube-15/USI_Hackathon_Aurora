import React from "react";
import "./styles.css";
import image from "./how_it_works.png";

function Section3(props) {
  return (
    <div>
      <div className="container3">
        <div className="how-it-works">
          <h2>How it works</h2>
          <p>Get started with Aurora Rewards and generative AI</p>
          <p>
            You can now use Aurora Rewards and generative AI powered
            capabilities to quickly create hyper-personalization experiences for
            your users. To learn how to get started,{" "}
            <a href="#" style={{ color: "#4cceac" }}>
              click here
            </a>
            .
          </p>
          <img src={image} alt="How it works" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
