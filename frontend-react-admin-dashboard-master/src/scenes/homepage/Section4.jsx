import React from "react";
import "./styles.css";

function Section4() {
    const cards = [
        {
            icon: "https://assets.confluent.io/m/33a45d96292b2cce/original/icon-benefit-PNG.png",
            text: "Unlock faster reward cycles for instant rewards (instead of waiting for a billing cycle)."
        },
        {
            icon: "https://assets.confluent.io/m/50d98f4703dd19c2/original/icon-ecommerce-PNG.png",
            text: "Increase repeat purchases and revenue from converting in-the-moment customer experiences."
        },
        {
            icon: "https://assets.confluent.io/m/65ccda4c61bad681/original/icon-streams-PNG.png",
            text: "Deliver a multichannel loyalty program with a seamless experience at each touch point."
        },
        {
            icon: "https://assets.confluent.io/m/dcd4b1512fc7425/original/icon-arm-PNG.png",
            text: "Improve competitive advantage over other loyalty offers."
        },
        {
            icon: "https://assets.confluent.io/m/454173ceb39b8612/original/icon-machine_learning-PNG.png",
            text: "Enable AI/ML decision-making based on purchase patterns and real-time behavioral data."
        }
    ];

    return (
        <div>
            <div className="container4">
                <div className="benefits-section">
                    <h2 style={{ fontSize: "36px" }}>Key Benefits</h2>
                    <div className="container benefits-row">
                        {cards.map((card, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon-container">
                                    <img src={card.icon} alt="Benefit icon" className="benefit-icon" />
                                </div>
                                <p style={{ fontSize: "15px" }}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;
