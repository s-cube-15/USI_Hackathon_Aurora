import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GridAddIcon } from "@mui/x-data-grid";
import "./styles.css";

export default function AccordionExpandIcon() {
return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
            style={{
                flex: 1,
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                marginLeft: "200px",
            }}
        >
            <div className="why-title">
                <h1 style={{ fontSize: "36px" }}>Use Cases of Aurora Rewards </h1>
            </div>
        </div>
        <div style={{ flex: 1, marginLeft: "10px", marginRight: "200px" }}>
            <Accordion
                sx={{ backgroundColor: "#283759", boxShadow: "none", border: "none" }}
            >
                <AccordionSummary
                    expandIcon={<GridAddIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" style={{ fontSize: "15px" }}>
                        <div className="hm">Email Campaign Personalization</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "15px" }}>
                        Tailor email content to individual users by recommending products
                        or content they are most likely to be interested in, leading to
                        higher open rates and conversions.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{ backgroundColor: "#283759", boxShadow: "none", border: "none" }}
            >
                <AccordionSummary
                    expandIcon={<GridAddIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span" style={{ fontSize: "15px" }}>
                        {" "}
                        <div className="hm">Targeted Promotions</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "15px" }}>
                        Identify and recommend promotions or discounts that are most
                        likely to appeal to specific users, increasing the effectiveness
                        of marketing campaigns and customer retention.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{ backgroundColor: "#283759", boxShadow: "none", border: "none" }}
            >
                <AccordionSummary
                    expandIcon={<GridAddIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span" style={{ fontSize: "15px" }}>
                        <div className="hm"> Customer Journey Optimization</div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "15px" }}>
                        Analyze user behavior to predict and address potential churn
                        points, offering personalized interventions to keep customers
                        engaged.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
);
}
