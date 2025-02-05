import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const AboutSection = () => {
  return (
    <div className="bg1 pt-[120px] pb-[120px]">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 ">
          <div className="flex justify-center">
            <img
              src="https://konstruk.rstheme.com/assets/about-3Cx81yRJ.png"
              alt="About"
              className="rounded-none !shadow-none"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 px-5">
          <div className="space-y-5">
            <span className="text-base font-medium leading-tight text-[#010d14] uppercase font-roboto mb-2 block">
              <span className="mr-2">What We Are Capable Of</span>
            </span>
            <h2 className="text-[42px] font-bold leading-[53px] text-[#010d14] mt-0 font-playfair">
              Future-Focused Rubber Solutions!
            </h2>

            {/* Bullet Points */}
            <ul className="flex items-start flex-col text-xl gap-2 font-medium text-gray-600">
              <li className="flex items-start gap-2">
                <ArrowRightIcon sx={{ color: "#ffd930" }} fontSize="large" />
                With 4 plants and working area of 10,000 sq. meters, Elastomech
                ensures large-scale production without compromising on quality.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRightIcon sx={{ color: "#ffd930" }} fontSize="large" />
                Our facility is equipped with 25 hydraulic presses, ranging from
                10 x 10 inches to 60 x 50 inches, enabling us to handle a wide
                variety of part sizes and complexities.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRightIcon sx={{ color: "#ffd930" }} fontSize="large" />
                We have a dedicated team focused on researching, designing, and
                developing customized products tailored to meet our client’s
                unique designs and applications.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRightIcon sx={{ color: "#ffd930" }} fontSize="large" />
                Elastomech features a fully equipped in-house laboratory to test
                the mechanical and technical properties of rubber compounds,
                including a Rheometer, Universal Testing Machine, Hot Air Aging
                Oven, and Muffled Furnace.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRightIcon sx={{ color: "#ffd930" }} fontSize="large" />
                We operate 5 mixing mills, 3 kneaders, and a large intermix
                system for efficient and precise material processing, ensuring
                the highest quality results.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
