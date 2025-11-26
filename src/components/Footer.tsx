export default function Footer() {
  return (
    <footer
      className="relative h-[800px] bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[800px] w-full flex">
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-between px-4 py-28">
          <div className="text-center flex items-center flex-col">
            <p className="m-auto text-9xl text-white mb-14 tracking-wider">
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
                    id="Vector"
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
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-sm mb-3 tracking-wider">
                Social
              </p>
              <ul className="flex list-none gap-6">
                <li className="text-white text-base">
                  <a
                    className="text-white no-underline tracking-wider hover:text-[#ffd53e] transition duration-300"
                    href="https://www.linkedin.com/in/arunraj90/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="text-white text-base">
                  <a
                    className="text-white no-underline tracking-wider hover:text-[#ffd53e] transition duration-300"
                    href="https://www.instagram.com/ar_macros"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white text-sm tracking-wider">
                Designed, coded, and shipped by me.
              </p>
              <p className="text-white text-sm tracking-wider">
                <span>&copy;</span>
                {`${new Date().getFullYear()} Arunraj`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
