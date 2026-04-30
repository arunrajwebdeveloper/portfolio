import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="bg-white w-full py-10 md:py-30">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h2 className="text-3xl display-text font-black md:text-4xl text-left z-10 ">
          Professional Experience
        </h2>

        <div className="mt-10 md:mt-20 space-y-15">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-between gap-5 flex-col-reverse md:flex-row"
          >
            <div>
              <p className="text-xl display-text font-medium">
                Software Developer
                <span className="text-sm display-text font-medium ms-4">
                  Nergy India Pvt Ltd - Kochi
                </span>
              </p>
              <p className="text-sm display-text font-medium text-gray-500">
                June 2022 - October 2025
              </p>
              <p className="text-base display-text font-semibold mt-4">
                Technical Skills & Responsibilities:
              </p>
              <p className="display-text space-y-2 mt-5 text-sm text-black">
                Developed and maintained robust React.js web applications,
                focusing on responsive UI design, reusable component
                architecture, and seamless RESTful API integration. I
                implemented core features for a Learning Management System (LMS)
                and admin portal using TanStack Query for optimized data
                fetching and state management. Additionally, I collaborated on
                code reviews, maintained technical documentation, and applied
                performance best practices to ensure scalable, high-quality
                frontend solutions.
              </p>
            </div>
            {/* logo */}
            <div className="w-20 h-20 md:w-36 md:h-36 flex-none flex bg-[#1d458a] text-white text-4xl md:text-6xl rounded-xl md:rounded-4xl">
              <span className="m-auto">N</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-between gap-5 flex-col-reverse md:flex-row"
          >
            <div>
              <p className="text-xl display-text font-medium">
                Frontend Developer
                <span className="text-sm display-text font-medium ms-4">
                  Hopescoding Pvt Ltd - Kochi
                </span>
              </p>
              <p className="text-sm display-text font-medium text-gray-500">
                April 2017 - June 2022
              </p>
              <p className="text-base display-text font-semibold mt-4">
                Technical Skills & Responsibilities:
              </p>
              <p className="display-text space-y-2 mt-5 text-sm text-black">
                Developed and maintained responsive web applications using
                React.js, focusing on high-performance frontend functionality
                and seamless RESTful API integration. I specialized in building
                interactive UI components for a flight ticket booking platform
                to enhance user engagement and ensured consistent data flow
                through close collaboration with backend teams. By following
                best practices for clean, scalable code, I consistently
                optimized application performance and delivery.
              </p>
            </div>
            {/* logo */}
            <div className="w-20 h-20 md:w-36 md:h-36 flex-none flex bg-[#c21313] text-white text-4xl md:text-6xl rounded-xl md:rounded-4xl">
              <span className="m-auto">H</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-between gap-5 flex-col-reverse md:flex-row"
          >
            <div>
              <p className="text-xl display-text font-medium">
                Frontend Developer
                <span className="text-sm display-text font-medium ms-4">
                  Acurax Technologies - Kochi
                </span>
              </p>
              <p className="text-sm display-text font-medium text-gray-500">
                February 2015 - April 2017
              </p>
              <p className="text-base display-text font-semibold mt-4">
                Technical Skills & Responsibilities:
              </p>
              <p className="display-text space-y-2 mt-5 text-sm text-black">
                Created the look, layout, and features of web applications by
                focusing on user-facing design and intuitive functionality. I
                implemented visual and interactive elements to enhance user
                engagement while converting PSD designs into responsive web
                pages using HTML5, CSS3, and JavaScript. By ensuring
                cross-browser compatibility and collaborating closely with
                designers, I translated UI/UX concepts into clean, maintainable
                code that remained consistent across all devices.
              </p>
            </div>
            {/* logo */}
            <div className="w-20 h-20 md:w-36 md:h-36 flex-none flex bg-[#00a8d5] text-white text-4xl md:text-6xl rounded-xl md:rounded-4xl">
              <span className="m-auto">A</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
