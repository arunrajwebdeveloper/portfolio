export default function Footer() {
  return (
    <footer
      className="relative h-[600px] md:h-[800px] bg-black overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[600px] md:h-[800px] w-full flex z-2">
        <div className="max-w-4xl relative mx-auto h-full flex flex-col justify-between px-4 py-24 md:py-28">
          <div className="text-center flex items-center flex-col">
            <p className="m-auto text-6xl lg:text-9xl text-white mb-10 lg:mb-14 tracking-wider">
              Let's work togather
            </p>
            <a
              className="text-white group rounded-4xl border-2 border-white hover:text-[#ffd53e] px-6 py-4 max-w-48 flex gap-x-2 items-center tracking-wider outline-0 hover:border-[#ffd53e] transition duration-300"
              href="mailto:arunrajwebdeveloper@gmail.com"
            >
              <span>Say Hello</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Arrow / Arrow_Up_Right_SM">
                  <path
                    d="M8 16L16 8M16 8H10M16 8V14"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#ffd53e] stroke-[#ffffff] transition duration-300"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="flex md:justify-between items-center md:items-end flex-col md:flex-row gap-8 md:gap-0">
            <div>
              <p className="text-gray-400 text-sm mb-3 tracking-wider text-center md:text-left">
                Social
              </p>
              <ul className="flex list-none gap-6">
                <li className="text-white text-base">
                  <a
                    className="text-white outline-0 no-underline tracking-wider hover:text-[#ffd53e] transition duration-300"
                    href="https://www.linkedin.com/in/arunraj90/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="text-white text-base">
                  <a
                    className="text-white outline-0 no-underline tracking-wider hover:text-[#ffd53e] transition duration-300"
                    href="https://www.instagram.com/ar_macros"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white text-sm tracking-wider text-center md:text-right">
                Designed, coded, and shipped by me.
              </p>
              <p className="text-white text-sm tracking-wider text-center md:text-right">
                <span>&copy;</span>
                {`${new Date().getFullYear()} Arunraj`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 52.917 52.917"
        className=" fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-0 opacity-10 select-none pointer-events-none "
      >
        <path
          fill="#ffffff"
          d="M42.231 51.603L39.766 32.82q-1.233 4.486-3.106 8.085-1.824 3.599-4.289 6.113-2.465 2.514-5.522 3.895-3.057 1.331-6.754 1.331-3.057 0-5.67-.937-2.564-.937-4.437-2.712-1.873-1.775-2.958-4.289-1.035-2.564-1.035-5.768 0-3.845 1.479-6.656 1.479-2.81 3.895-4.832 2.465-2.071 5.522-3.55 3.106-1.479 6.36-2.712 3.254-1.233 6.311-2.366 3.106-1.134 5.522-2.465 2.465-1.38 3.944-3.106 1.479-1.726 1.479-4.191 0-3.007-2.219-4.486-2.169-1.528-5.768-1.085-3.55.394-8.085 2.958-4.536 2.514-9.219 7.642l-2.81-6.409q3.993-3.106 8.677-4.782Q25.814.823 30.596.823q7.444 0 11.487 4.141 4.092 4.092 4.092 12.177v34.461zm-18.784-3.944q8.184 0 12.227-8.184 4.092-8.233 4.092-24.897-1.972 1.873-4.733 3.352-2.712 1.479-5.719 2.859-3.007 1.38-5.965 2.859-2.909 1.43-5.226 3.352-2.317 1.873-3.796 4.388-1.43 2.514-1.43 5.965 0 4.881 2.81 7.592 2.859 2.712 7.74 2.712z"
        />
      </svg>
    </footer>
  );
}
