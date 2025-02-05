import React from "react";
import Button from "@mui/material/Button";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap bg3 py-10 px-4 md:py-20 md:px-12 lg:py-[120px] lg:px-[10em]">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-4 md:p-6">
        <div className="contact-section">
          <div className="contact-wrap">
            <div className="sec-title mb-4 md:mb-6">
              <span className="text-black uppercase font-semibold text-sm md:text-lg">
                Let's Talk
              </span>
              <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Get in touch
              </h2>
            </div>
            <div id="form-messages"></div>
            <form id="contact-form">
              <div className="flex flex-wrap -mx-2 md:-mx-3">
                {/* Name Input */}
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                  <input
                    className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                {/* Email Input */}
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                  <input
                    className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </div>
                {/* Phone Number Input */}
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                  <input
                    className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                {/* Website Input */}
                <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                  <select
                    className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                    id="phone"
                    name="phone"
                    placeholder="Select Your Locality"
                    required
                  >
                    <option value="">Product Intrested</option>{" "}
                    <option value="india">Dock Bumper</option>
                    <option value="europe">Dock Fender</option>
                    <option value="africa">Wheel Chocker</option>
                    <option value="nigeria">Rubber Buffer</option>
                    <option value="netherlands">Cable Protector</option>
                    <option value="uk">Hose Ramps</option>
                  </select>
                </div>
                {/* Message Textarea */}
                <div className="w-full px-2 md:px-3 mb-3">
                  <textarea
                    className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                    id="message"
                    name="message"
                    placeholder="Your Message Here"
                    required
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <Button
                variant="contained"
                className="!bg-[#ffda31]  !text-black !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-black hover:!text-white !rounded-none"
              >
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full lg:w-1/2 p-4 md:p-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4126.37591102106!2d73.19148297550592!3d19.186439048495625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7934357de103d%3A0x43684d9344850c72!2sELASTOMECH!5e1!3m2!1sen!2sin!4v1731173611029!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[6px] md:h-[500px] lg:h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
