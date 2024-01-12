'use client';

import { MouseTracker } from '@/components/MouseTracker';
import { useMousePosition } from '@/components/MouseTracker/hooks/useMousePosition';

export const MouseTrackerProvider = ({ children }: React.PropsWithChildren) => {
  const { position, isHoveringAnchor, handleMouseMove } = useMousePosition();

  return (
    <div onMouseMove={handleMouseMove}>
      <MouseTracker position={position} isHoveringAnchor={isHoveringAnchor} />
      {children}
    </div>
  );
};
