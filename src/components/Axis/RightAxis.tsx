import React, { useMemo } from 'react';

import { usePlotContext } from '../../hooks';
import type { AxisChildProps } from '../../types';
import { Ticks } from '../Ticks';

export default function RightAxis({
  id,
  showGridLines,
  display,
  label,
  labelSpace,
  labelStyle,
  fontSize,
  tickStyle,
  showTicks,
}: AxisChildProps) {
  const { axisContext, plotHeight, top, left, width, right } = usePlotContext();

  // Calculates the main axis values
  const { scale, scientific } = axisContext[id] || {};
  const ticks: number[] = useMemo(() => scale?.ticks() || [], [scale]);
  const range = scale?.range() || [0, 0];

  // Create gridlines
  const gridlines = useMemo(() => {
    if (!showGridLines || !scale) return null;
    return (
      <g className="gridLines">
        {ticks.map((val) => (
          <line
            key={val}
            x1={left}
            x2={width - right}
            y1={scale(val)}
            y2={scale(val)}
            stroke="black"
            strokeDasharray="2,2"
            strokeOpacity={0.5}
          />
        ))}
      </g>
    );
  }, [showGridLines, ticks, scale, left, width, right]);

  return (
    <g className="axis">
      {gridlines}
      {display && (
        <g className="ticks" transform={`translate(${width - right}, 0)`}>
          <line y1={range[0]} y2={range[1]} stroke="black" />
          <Ticks
            scientific={scientific}
            scale={scale}
            show={showTicks}
            ticks={ticks}
            style={tickStyle}
            getValues={(y) => ({
              line: { x2: 6, y1: y, y2: y },
              text: { x1: 10, y1: y },
            })}
          />
        </g>
      )}
      {label && display && (
        <text
          transform={`translate(${
            width - right + fontSize + labelSpace + (scientific ? 14 : 0)
          }, ${top + plotHeight / 2})rotate(90)`}
          dy={fontSize}
          textAnchor="middle"
          fontSize={fontSize}
          style={labelStyle}
        >
          {label}
        </text>
      )}
    </g>
  );
}
