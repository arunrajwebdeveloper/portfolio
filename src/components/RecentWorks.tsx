import { Link } from "react-router";
// import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";

const items = [
  {
    src: "./projects/matrimony-screenshot-3.png",
    title: "Notes Application",
    text: "Notes application using ReactJS and NestJS.",
    demoUrl: "https://notes-blond-seven.vercel.app/login",
  },
  // {
  //   src: "./projects/matrimony-screenshot-1.png",
  //   title: "Matrimony App",
  //   text: "A matrimony app with Nextjs and NestJs.",
  //   demoUrl: null,
  // },
  {
    src: "./projects/matrimony-screenshot-2.png",
    title: "Photography portfolio",
    text: "Elegant visuals that blend minimalism and storytelling using html5, css3, javascript and GSAP.",
    demoUrl: "https://arunrajwebdeveloper.github.io/photography-showcase/",
  },
  {
    src: "./projects/matrimony-screenshot-4.png",
    title: "Coming soon",
    text: "Next project will add soon.",
    demoUrl: null,
  },
];

const key_projects = [
  {
    title: "Nergy Vidya - Student Portal",
    role: "Software Developer",
    text: "Built and maintained a responsive Learning Management System (LMS) that allowed students to access courses, assignments, certificates and progress reports seamlessly. Focused on delivering an intuitive user experience through UI optimization, secure API integrations, and continuous performance enhancements.",
    demoUrl: "https://nergy360.com/",
    logo: {
      title: "Nergy Vidya",
      subtext: "Student Portal",
      src: "./projects/class-room.jpg",
    },
  },
  {
    src: "./projects/matrimony-screenshot-2.png",
    title: "Nergy Vidya - Admin Portal",
    role: "Software Developer",
    text: "Developed an administrative dashboard for managing student data, content, and analytics. Designed an intuitive UI to streamline workflows for administrators and educators. Integrated secure REST APIs for seamless data synchronization and implemented interactive visualizations for real-time performance insights. Optimized frontend performance for large datasets and collaborated with backend and design teams to ensure a cohesive user experience.",
    demoUrl: "https://nergy360.com/",
    logo: {
      title: "Nergy Vidya",
      subtext: "Admin Portal",
      src: "./projects/office-image.jpg",
    },
  },
  {
    src: "./projects/matrimony-screenshot-4.png",
    title: "Tathkarah Flight Booking Web App",
    role: "Frontend Developer",
    text: "Developed a responsive flight booking application using React, enabling users to search, filter, and book flights seamlessly. Focused on UI design, API integration, and smooth user interactions.",
    demoUrl: "https://www.tathkarah.com/en",
    logo: {
      title: "Tathkarah",
      subtext: "Flight Booking App",
      src: "./projects/flight-image.jpg",
    },
  },
];

function RecentWorks() {
  // return (
  //   <section className="flex flex-col justify-center bg-white w-full py-28 min-h-screen">
  //     <div className="relative">
  //       <h2 className="text-3xl display-text font-black md:text-4xl text-center relative z-10">
  //         Recent Works
  //       </h2>

  //       <div className="relative mt-20 md:mt-32 lg:flex lg:flex-wrap">
  //         {items.map((item, index, arr) => {
  //           const isNotLastItem = arr.length - 1 !== index;

  //           return (
  //             <div
  //               key={index}
  //               className="w-full bg-white lg:w-1/2 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-between pt-20 px-6 md:px-10 lg:20"
  //             >
  //               <motion.div
  //                 initial={{ opacity: 0, y: 50 }}
  //                 whileInView={{ opacity: 1, y: 0 }}
  //                 transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
  //                 viewport={{ once: false, amount: 0.4 }}
  //                 className="text-center max-w-md mx-auto"
  //               >
  //                 <h3 className="text-2xl md:text-3xl lg:text-4xl text-black mb-2">
  //                   {item.title}
  //                 </h3>
  //                 <p className="text-gray-700 leading-relaxed">{item.text}</p>
  //                 {isNotLastItem && item.demoUrl && (
  //                   <div className="flex gap-2 items-center justify-center mt-4">
  //                     <Link
  //                       to={item?.demoUrl}
  //                       target="_blank"
  //                       className="text-black display-text outline-0 text-sm px-4 py-1 border border-black rounded-4xl"
  //                     >
  //                       Demo
  //                     </Link>
  //                   </div>
  //                 )}
  //               </motion.div>
  //               <ParallaxImage src={item.src} speed={40} />
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <>
      <section className="bg-white w-full pt-10 md:pt-30 pb-15">
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-3xl display-text font-black md:text-4xl text-left z-10 ">
            Key Projects
          </h2>

          <div className="mt-10 md:mt-20 space-y-15">
            {key_projects.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex justify-between gap-5 flex-col-reverse md:flex-row"
                >
                  <div>
                    <p className="text-xl display-text font-medium">
                      {item.title}
                    </p>
                    <p className="text-base display-text font-medium mt-2 text-gray-800">
                      {`Role: ${item.role}`}
                    </p>
                    <p className="text-sm display-text font-normal mt-2">
                      {item.text}
                    </p>
                    {item.demoUrl && (
                      <div className="flex gap-2 items-center mt-4">
                        <Link
                          to={item?.demoUrl}
                          target="_blank"
                          className="text-black display-text outline-0 text-sm px-4 py-1 border border-black rounded-4xl"
                        >
                          Project Link
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* logo */}
                  <div className="relative h-32 w-[250px] flex-none overflow-hidden rounded-2xl bg-slate-800">
                    <img
                      src={item.logo.src}
                      alt={item.title}
                      className="w-full h-32 object-cover relative z-0 opacity-60"
                    />
                    <div className="absolute w-full px-6 z-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="text-xl display-text text-white m-0">
                        {item.logo.title}
                      </p>
                      <p className="text-sm display-text text-white m-0 leading-2">
                        {item.logo.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white w-full pb-20  md:pb-30 pt-5 md:pt-15">
        <div className="w-full max-w-3xl mx-auto px-4">
          <h2 className="text-3xl display-text font-black md:text-4xl text-left z-10 ">
            Personal Projects
          </h2>

          <div className="mt-20 space-y-15">
            {items.map((item, index, arr) => {
              const isNotLastItem = arr.length - 1 !== index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex justify-between gap-5 flex-col-reverse md:flex-row"
                >
                  <div>
                    <p className="text-xl display-text font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm display-text font-normal mt-2">
                      {item.text}
                    </p>
                    {isNotLastItem && item.demoUrl && (
                      <div className="flex gap-2 items-center mt-4">
                        <Link
                          to={item?.demoUrl}
                          target="_blank"
                          className="text-black display-text outline-0 text-sm px-4 py-1 border border-black rounded-4xl"
                        >
                          Demo
                        </Link>
                      </div>
                    )}
                  </div>
                  {/* logo */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-[250px] h-32 flex-none"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentWorks;
