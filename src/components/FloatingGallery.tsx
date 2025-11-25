import FloatingImage from "./FloatingImage";

export default function FloatingGrid() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-b from-neutral-900 to-black cursor-default px-4 flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-white text-3xl z-20 pointer-events-none">
          I love photography.
        </h1>
        <p>
          <a href="/" className="text-white flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
            >
              <path
                d="M5.87.123C4.242.196 2.831.594 1.691 1.729.548 2.869.155 4.286.082 5.897.036 6.902-.232 14.498.544 16.49a5.04 5.04 0 0 0 2.91 2.902c.633.246 1.355.413 2.415.462 8.861.401 12.145.183 13.531-3.364.246-.631.415-1.353.462-2.41.405-8.884-.066-10.809-1.61-12.352C17.027.507 15.586-.325 5.87.123m.082 17.945c-.97-.044-1.497-.205-1.848-.341-.884-.343-1.547-1.004-1.889-1.883-.591-1.514-.395-8.703-.342-9.866.052-1.139.283-2.181 1.087-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.972 2.628-11.778 2.224M14.09 4.69c0 .657.534 1.191 1.194 1.191s1.195-.534 1.195-1.191-.535-1.191-1.195-1.191-1.194.534-1.194 1.191M4.863 9.988c0 2.815 2.288 5.097 5.11 5.097s5.11-2.282 5.11-5.097-2.288-5.096-5.11-5.096-5.11 2.281-5.11 5.096m1.793 0c0-1.826 1.485-3.308 3.316-3.308s3.316 1.482 3.316 3.308-1.485 3.309-3.316 3.309-3.316-1.482-3.316-3.309"
                fill-rule="evenodd"
                fill="#ffffff"
              />
            </svg>
            <span>instagram</span>
          </a>
        </p>
      </div>

      <FloatingImage
        src="https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=1000"
        alt="Record Player"
        factor={-25}
        className="top-[10vh] left-[24vw] w-64 h-72"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000"
        alt="Cybertruck"
        factor={40}
        className="top-[15vh] left-[20vw] w-48 h-36"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000"
        alt="Bedroom"
        factor={15}
        className="top-[15vh] right-[10vw] w-72 h-48"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000"
        alt="Turntable"
        factor={20}
        className="top-[45vh] left-[15vw] w-60 h-40"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1521200052569-1799509456d3?w=1000"
        alt="Turntable"
        factor={40}
        className="bottom-[10vh] left-[30vw] w-72 h-60"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000"
        alt="Speaker"
        factor={-15}
        className="bottom-[5vh] right-[15vw] w-64 h-48"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000"
        alt="Bedroom"
        factor={15}
        className="bottom-[15vh] right-[20vw] w-64 h-48"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000"
        alt="Cybertruck"
        factor={40}
        className="top-[15vh] right-[20vw] w-48 h-36"
      />
    </section>
  );
}
