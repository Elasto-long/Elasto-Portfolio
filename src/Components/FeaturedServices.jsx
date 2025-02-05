import React from "react";
import { Grid } from "@mui/material";
import {
    Architecture,
    DesignServices,
    HomeRepairService,
    Business,
    Edit,
    Animation,
} from "@mui/icons-material";

// Services with proper icons and matching titles
const services = [
    {
        title: "Production Capacity",
        description: "We have 4 plants and a working area of total 10000 sq. Mtrs.",
        icon: <Architecture fontSize="large" />,
    },
    {
        title: "Machinery",
        description:
            "We have total 25 hydraulic presses starting from size 10 x 10 inch all the way up to 60 x 50 inch.",
        icon: <HomeRepairService fontSize="large" />,
    },
    {
        title: "Product Development",
        description:
            "Developed 1000+ Rubber and Metal products for our clients locally and internationally.",
        icon: <DesignServices fontSize="large" />,
    },
    {
        title: "R&D Team",
        description:
            "Dedicated team for researching, designing, and developing products as per clients’ design and application.",
        icon: <Business fontSize="large" />,
    },
    {
        title: "In-house Testing Facility",
        description:
            "A full-fledged in-house laboratory capable of testing basic mechanical and technical properties of rubber compounds, featuring a Rheometer, Universal Testing Machine, Hot Air Ageing Oven, and Muffled Furnace.",
        icon: <Edit fontSize="large" />,
    },
    {
        title: "Mixing Equipment",
        description:
            "We use 5 mixing mills, 3 kneaders, and a giant intermix for efficient material processing.",
        icon: <Animation fontSize="large" />,
    },
];

const FeaturedServices = () => {
    return (
        <section className="pt-[120px] pb-[120px] px-[120px] bg-gray-50  max-[800px]:px-[10px] max-[800px]:py-[10px]">
            <div className="container mx-auto text-start">
                <h2 className="text-[45px] font-bold leading-[53px] text-[#010d14] mt-0 font-playfair mb-12">
                    Our Capabilities
                </h2>

                <Grid container spacing={2} className="justify-center ">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <div className="p-6 bg-white shadow-md hover:shadow-lg transition rounded-md text-left h-full flex flex-col">
                                <div className="text-yellow-500 mb-4">{service.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600 flex-grow mb-4">
                                    {service.description}
                                </p>

                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default FeaturedServices;
