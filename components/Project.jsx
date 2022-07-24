export const ProjectContainer = ({ children }) => {
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>;
};

export const ProjectBackground = () => {
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>;
};
export const ProjectLeft = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[40vh] sm:h-[30vh] lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10 text-4xl lg:text-6xl p-8">{children}</div>
    </div>
  );
};

export const ProjectRight = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen bg-white"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full md:max-w-[95vw] pt-10 lg:pt-0 md:px-0">
        {children}
      </div>
    </div>
  );
};
