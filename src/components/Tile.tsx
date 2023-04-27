import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/ScrollObserver";

export const TileContext = React.createContext({
  numOfPages: 0,
  currentPage: 0,
});

interface TileWrapperProps {
  children: React.ReactNode;
  numOfPages: number;
}

export const TileWrapper: React.FC<TileWrapperProps> = ({
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  let currentPage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white "
        style={{
          height: numOfPages * 100 + "vh",
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

interface TileProps {
  page: number;
  renderContent: ({ progress }: { progress: number }) => React.ReactNode;
}

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const refContainer = useRef(null);
  const progress = Math.max(0, currentPage - page);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
        opacity: opacity,
      }}
      className="absolute top-0 w-full"
    >
      {renderContent({ progress })}
    </div>
  );
};
