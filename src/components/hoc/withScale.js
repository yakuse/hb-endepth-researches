import React from 'react';
import { maxScreenWidth } from '@/src/theme';
import { useResizeDetector } from 'react-resize-detector';

const lerpRange = (x1, x2, y1, y2, x) => ((x - x1) * (y2 - y1)) / (x2 - x1) + y1;

const screenScale = (width) => {
  if (width) {
    return lerpRange(0, maxScreenWidth, 0, 1, width);
  }
  return 1;
};

const withScale = (Component) => (props) => {
  const targetRef = React.useRef();
  const { width } = useResizeDetector({ targetRef });

  return (
    <Component
      scaleRef={targetRef}
      scaleStyles={{ transform: `scale(${screenScale(width)})` }}
      {...props}
    />
  );
};

export default withScale;
