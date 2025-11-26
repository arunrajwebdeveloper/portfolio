const Spinner = () => {
  return (
    <div className="fixed inset-0 z-99999 bg-white flex w-full h-full">
      <div className="m-auto">
        <svg height={0} width={0}>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              height="200%"
              y="-50%"
              width="200%"
              x="-50%"
              id="goo"
            >
              <feGaussianBlur
                result="blur"
                stdDeviation={8}
                in="SourceGraphic"
              />
              <feColorMatrix
                result="cm"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                mode="matrix"
                in="blur"
              />
            </filter>
          </defs>
        </svg>
        <svg height={100} width={300} viewBox="0 0 320 180">
          <g filter="url(#goo)">
            <circle cy={90} cx={160} r={24} fill="#ffd53e" className="circle" />
            <circle
              cy={90}
              cx={160}
              r={24}
              fill="#ffd53e"
              className="circle right"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
