import { useMousePosition } from '@/components/MouseTracker/hooks/useMousePosition';
import { cn } from '@/utils/cn';

type MouseTrackerProps = Omit<
  ReturnType<typeof useMousePosition>,
  'handleMouseMove'
>;

export const MouseTracker = ({
  position,
  isHoveringAnchor,
}: MouseTrackerProps) => {
  return (
    <div
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${
          position.y
        }px) scale(${isHoveringAnchor ? 4 : 1})`,
      }}
      className={cn(
        'w-4 h-4 bg-gray-700 rounded-full opacity-10 pointer-events-none',
        'transition ease-linear duration-100 transform-gpu',
        'fixed'
      )}
    />
  );
};
