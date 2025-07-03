export const ProjectContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-dscreen">
    {children}
  </div>;
};

export const ProjectBackground = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-dscreen top-0 sticky">
      <div className="bg-black h-[40vh] lg:h-auto"></div>
      <div className="bg-white h-[60vh] lg:min-h-dscreen"></div>
    </div>
  );
};

interface ProjectProps {
  children: React.ReactNode;
  progress: number;
}
export const ProjectLeft: React.FC<ProjectProps> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col justify-center text-3xl lg:text-3xl h-[40vh] lg:hd-screen my-4"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10 text-4xl lg:text-6xl p-8">{children}</div>
    </div>
  );
};

export const ProjectRight: React.FC<ProjectProps> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center lg:hd-screen bg-white"
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
