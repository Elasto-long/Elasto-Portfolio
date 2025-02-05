import React from "react";
import Button from "@mui/material/Button";

const projectsData = [
  {
    imgSrc: "https://konstruk.rstheme.com/assets/3-CylmSe1b.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "Innovating Dock Fenders and a comprehensive line of Rubber Products, ensuring superior protection for marine infrastructure worldwide.",
    link: "/blog-single",
  },
  {
    imgSrc: "https://konstruk.rstheme.com/assets/4-DVKcE915.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "At Elastomech, we proudly offer a comprehensive range of high-performance Dock Bumpers, designed to safeguard your docks and vessels with unmatched durabilit",
    link: "/blog-single",
  },
  {
    imgSrc: "https://konstruk.rstheme.com/assets/5-o4RrYui1.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "Wheel chokers are practical devices designed to secure wheels, preventing unintended movement of vehicles or machinery.Crafted from durable materials",
    link: "/blog-single",
  },
  {
    imgSrc: "https://konstruk.rstheme.com/assets/3-CylmSe1b.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "At Elastomech, we design and manufacture high-quality hose ramps, providing durable solutions for accessibility and convenience.",
    link: "/blog-single",
  },
  {
    imgSrc: "https://konstruk.rstheme.com/assets/5-o4RrYui1.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "Discover premium quality tipper pads designed for durability and performance in various applications. Perfect for enhancing safety and efficiency.",
    link: "/blog-single",
  },
  {
    imgSrc: "https://konstruk.rstheme.com/assets/5-o4RrYui1.jpg",
    date: "26 April 2022",
    admin: "Admin",
    title:
      "The construction business the owner site is jam-packedThe construction business the owner site is jam-packed",
    link: "/blog-single",
  },
];

const ProjectsSection = () => {
  return (
    <div
      className="py-10 px-4 md:py-20 md:px-12 lg:py-[120px] lg:px-[10em] bg-[#fff]"
      id="rs-blog"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-base font-medium leading-tight text-[#010d14] uppercase font-roboto mb-2 block">
            Projects
          </span>
          <h2 className="text-[42px] font-bold leading-[53px] text-[#010d14] mt-0">
            Our latest projects
          </h2>
        </div>
        {/* Updated to a grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border rounded-sm overflow-hidden"
            >
              <div className="image-wrap group overflow-hidden">
                <a href={project.link}>
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-base font-medium leading-tight text-[#010d14]  font-roboto mb-3 block">
                  <a
                    href={project.link}
                    className="hover:text-blue-600 transition duration-300"
                  >
                    {project.title}
                  </a>
                </h3>

                <Button
                  variant="contained"
                  className="!bg-[#ffda31]  !text-black !font-[600] w-[200px] !px-[15px] !py-[15px] h-auto !text-[15px] mt-2 !shadow-none hover:!bg-black hover:!text-white !rounded-none"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
