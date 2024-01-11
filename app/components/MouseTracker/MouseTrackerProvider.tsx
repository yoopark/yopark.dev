'use client';

import { MouseTracker } from '@/app/components/MouseTracker';
import { useMousePosition } from '@/app/components/MouseTracker/hooks/useMousePosition';

export const MouseTrackerProvider = ({ children }: React.PropsWithChildren) => {
  const { position, isHoveringAnchor, handleMouseMove } = useMousePosition();

  return (
    <div onMouseMove={handleMouseMove}>
      <MouseTracker position={position} isHoveringAnchor={isHoveringAnchor} />
      {children}
    </div>
  );
};
