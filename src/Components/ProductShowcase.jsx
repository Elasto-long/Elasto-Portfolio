import Hcr_4 from "../Assets/images/Products/HCR_4.jpg";
import df_2 from "../Assets/images/Products/DFender/2by2.jpg";
import wheel_choker_8 from "../Assets/images/Products/wheel_choker_8.jpg";
import black_speed_breaker from "../Assets/images/Products/black_speed_breaker.jpg";
import dock_bumper_13x10x4 from "../Assets/images/Products/dock_bumper_13x10x4.jpg";
import core_cable_protector from "../Assets/images/Products/2_core_cable_protector.jpg";
import {
  Construction,
  Build,
  DesignServices,
  Engineering,
  HomeRepairService,
  Architecture,
} from "@mui/icons-material";

const ProductShowcase = () => {
  const services = [
    {
      title: "Dock Fenders",
      description:
        "Innovating Dock Fenders and a comprehensive line of Rubber Products, ensuring superior protection for marine infrastructure worldwide.",
      image: df_2,
      icon: <Construction className="text-4xl text-black-500" />,
    },
    {
      title: "Dock Bumpers",
      description:
        "At Elastomech, we proudly offer a comprehensive range of high-performance Dock Bumpers, designed to safeguard your docks and vessels with unmatched durability",
      image: dock_bumper_13x10x4,
      icon: <HomeRepairService className="text-4xl text-black-500" />,
    },
    {
      title: "Wheel Chokers",
      description:
        "Wheel chokers are practical devices designed to secure wheels, preventing unintended movement of vehicles or machinery.Crafted from durable materials",
      image: wheel_choker_8,
      icon: <Engineering className="text-4xl text-black-500" />,
    },
    {
      title: "Speed Breakers",
      description:
        "high-quality, durable speed breakers designed to enhance road safety and manage traffic effectively. Built with robust materials, our speed breakers are engineered",
      image: black_speed_breaker,
      icon: <DesignServices className="text-4xl text-black-500" />,
    },
    {
      title: "Hose Ramps",
      description:
        "At Elastomech, we design and manufacture high-quality hose ramps, providing durable solutions for accessibility and convenience.",
      image: Hcr_4,
      icon: <Build className="text-4xl text-black-500" />,
    },
    {
      title: "Cable Protectors",
      description:
        "Durable and reliable cable protectors designed to safeguard wires and prevent tripping hazards, ensuring safety in high-traffic areas.",
      image: core_cable_protector,
      icon: <Architecture className="text-4xl text-black-500" />,
    },
  ];
  return (
    <div className="rs-services services-main-home gray-bg !py-12 px-4 md:py-20 md:px-12 lg:py-[120px] lg:px-[10em] bg-[#e8eaee]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[50px] font-bold leading-[53px] text-[#010d14] mt-0 font-playfair">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="services-item group bg-white shadow-sm border rounded-sm cursor-pointer overflow-hidden"
            >
              <div className="services-wrap relative">
                <div className="services-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="services-content">
                  <div className="service-inner flex items-center gap-4 justify-between w-full border">
                    <div className="services-titles">
                      <h3 className="text-xl font-semibold mb-2">
                        <a
                          href={"#"}
                          className="hover:text-blue-500 transition-colors"
                        >
                          {service.title}
                        </a>
                      </h3>
                    </div>
                    <div className="icon-image">{service.icon}</div>
                  </div>
                </div>
                <div className="service-description">
                  <div className="icon-top">{service.icon}</div>
                  <h2 className="text-white mb-2 text-[20px] font-semibold">
                    {service.title}
                  </h2>
                  <p className="services-txt text-white mb-4">
                    {service.description}
                  </p>
                  <div className="services-btn">
                    <a
                      className="text-white font-medium hover:underline"
                      href={"#"}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
