import { motion } from "framer-motion";

const data = [
  {
    id: "5104f3ae-9d20-45df-a783-6d058a0ed7b2",
    logo: {
      text: "N",
      color: "#1d458a",
    },
    position: "Software Developer",
    company: "Nergy India Pvt Ltd - Kochi",
    year: "June 2022 - October 2025",
    responsibilities:
      "Developed and maintained robust React.js web applications, focusing on responsive UI design, reusable component architecture, and seamless RESTful API integration. I implemented core features for a Learning Management System (LMS) and admin portal using TanStack Query for optimized data fetching and state management. Additionally, I collaborated on code reviews, maintained technical documentation, and applied performance best practices to ensure scalable, high-quality frontend solutions.",
  },
  {
    id: "f672318b-3500-4d23-9b00-f9917c6ddee8",
    logo: {
      text: "H",
      color: "#c21313",
    },
    position: "Frontend Developer",
    company: "Hopescoding Pvt Ltd - Kochi",
    year: "April 2017 - June 2022",
    responsibilities:
      "Developed and maintained responsive web applications using React.js, focusing on high-performance frontend functionality and seamless RESTful API integration. I specialized in building interactive UI components for a flight ticket booking platform to enhance user engagement and ensured consistent data flow through close collaboration with backend teams. By following best practices for clean, scalable code, I consistently optimized application performance and delivery.",
  },
  {
    id: "f5c1e71f-25bb-4e79-9d51-db81f161dc7a",
    logo: {
      text: "A",
      color: "#00a8d5",
    },
    position: "Frontend Developer",
    company: "Acurax Technologies - Kochi",
    year: "February 2015 - April 2017",
    responsibilities:
      "Created the look, layout, and features of web applications by focusing on user-facing design and intuitive functionality. I implemented visual and interactive elements to enhance user engagement while converting PSD designs into responsive web pages using HTML5, CSS3, and JavaScript. By ensuring cross-browser compatibility and collaborating closely with designers, I translated UI/UX concepts into clean, maintainable code that remained consistent across all devices.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-white w-full py-10 md:py-30">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h2 className="text-3xl display-text font-black md:text-4xl text-left z-10 ">
          Professional Experience
        </h2>

        <div className="mt-10 md:mt-20 space-y-15">
          {data?.map((ex) => {
            return (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-between gap-5 md:gap-x-12 flex-col-reverse md:flex-row"
              >
                <div>
                  <p className="text-xl display-text font-medium">
                    {ex.position}
                    {/* <span className="text-sm display-text font-medium ms-4">
                      {ex.company}
                    </span> */}
                  </p>
                  <p className="text-sm display-text font-medium text-gray-800 mb-1">
                    {ex.company}
                  </p>
                  <p className="text-sm display-text font-medium text-gray-500">
                    {ex.year}
                  </p>
                  <p className="text-base display-text font-semibold mt-4">
                    Technical Skills & Responsibilities:
                  </p>
                  <p className="display-text space-y-2 mt-5 text-sm text-black">
                    {ex.responsibilities}
                  </p>
                </div>
                {/* logo */}
                <div
                  style={{ backgroundColor: ex.logo.color }}
                  className="w-20 h-20 md:w-34 md:h-34 flex-none flex text-white text-4xl md:text-6xl rounded-xl md:rounded-4xl"
                >
                  <span className="m-auto">{ex.logo.text}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
