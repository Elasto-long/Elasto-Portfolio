import React from "react";
import { Grid } from "@mui/material";
import { CalendarToday, Description, RocketLaunch } from "@mui/icons-material";

const engagementSteps = [
    {
        title: "Initial Meeting",
        description:
            "We'll schedule an initial meeting to learn about your challenges and ensure we are the right match.",
        icon: <CalendarToday fontSize="large" />,
    },
    {
        title: "Solution Presentation",
        description:
            "Our team will find a solution and present you with a detailed Statement of Work.",
        icon: <Description fontSize="large" />,
    },
    {
        title: "Project Kickoff",
        description:
            "We'll start working on your project immediately and deliver on time and on budget.",
        icon: <RocketLaunch fontSize="large" />,
    },
];

const EngagementProcess = () => {
    return (
        <section className="bg-white py-16 px-[120px] max-[800px]:px-[10px] max-[800px]:py-[10px]">
            <div className="container mx-auto text-end">
                <h2 className="text-[45px] font-bold leading-[53px] text-[#010d14] mt-0 font-playfair  mb-12">
                    Our Engagement Process
                </h2>
                <Grid container spacing={2} justifyContent="center">
                    {engagementSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <div className="h-full p-6 bg-[#ffd93125] rounded-md shadow-sm border-2  border-[#ffd93125] hover:border-2 hover:border-[#ffd107] transition">
                                <div className="text-[#ffd107] flex justify-center mb-4 !text-7xl">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-center mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {step.description}
                                </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default EngagementProcess;
