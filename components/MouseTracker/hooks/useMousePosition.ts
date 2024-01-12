'use client';

import { MouseEventHandler, useState } from 'react';

const checkIsHoveringAnchor = (element: HTMLElement) => {
  while (element.parentElement !== null) {
    if (element.tagName === 'A') {
      return true;
    }
    element = element.parentElement;
  }
  return false;
};

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringAnchor, setIsHoveringAnchor] = useState(false);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    let element = e.target as HTMLElement;

    setPosition({ x: e.clientX, y: e.clientY });
    setIsHoveringAnchor(checkIsHoveringAnchor(element));
  };

  return { position, handleMouseMove, isHoveringAnchor };
};
