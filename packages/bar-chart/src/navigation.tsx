import React from 'react';
import { Group } from '@visx/group';
import { Circle, Line } from '@visx/shape';
import { Text } from '@visx/text';
import { NavigationProps } from './types';
import { CATEGORY_LABEL_WIDTH, X_AXIS_HEIGHT } from './consts';

export const Navigation: React.FC<NavigationProps> = ({
  show,
  margin,
  navPoints,
  activePoint,
  chartHeight,
  setActivePoint,
  onForward,
  onBack,
}) => {
  if (!show) {
    return null;
  }

  return (
    <Group left={margin.left} top={margin.top + chartHeight + X_AXIS_HEIGHT}>
      <svg
        x={CATEGORY_LABEL_WIDTH / 2 - 21}
        width={42}
        height={19}
        viewBox="0 0 412.289 186.109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Group transform="matrix(-1, 0, 0, 1, 106.411006, 0.223)" onClick={onBack}>
          <rect y="-0.223" width="106.411" height="185.663" style={{ fill: 'rgba(0, 0, 0, 0)', cursor: 'pointer' }} />
          <path
            style={{ cursor: 'pointer' }}
            d="M 11.565 185.345 C 8.703 185.348 5.958 184.217 3.94 182.203 C -0.273 178.024 -0.273 171.243 3.94 167.065 L 78.612 92.896 L 3.94 18.723 C -0.273 14.539 -0.273 7.762 3.94 3.584 C 8.152 -0.6 14.974 -0.6 19.185 3.584 L 101.472 85.321 C 105.684 89.505 105.684 96.282 101.472 100.46 L 19.185 182.202 C 17.168 184.216 14.424 185.347 11.565 185.345 Z"
            fill="#333333"
          />
        </Group>
        <Group transform="matrix(1, 0, 0, 1, 305.878, 0.223)" onClick={onForward}>
          <rect y="-0.223" width="106.411" height="185.663" style={{ fill: 'rgba(0, 0, 0, 0)', cursor: 'pointer' }} />
          <path
            style={{ cursor: 'pointer' }}
            d="M 11.565 185.345 C 8.703 185.348 5.958 184.217 3.94 182.203 C -0.273 178.024 -0.273 171.243 3.94 167.065 L 78.612 92.896 L 3.94 18.723 C -0.273 14.539 -0.273 7.762 3.94 3.584 C 8.152 -0.6 14.974 -0.6 19.185 3.584 L 101.472 85.321 C 105.684 89.505 105.684 96.282 101.472 100.46 L 19.185 182.202 C 17.168 184.216 14.424 185.347 11.565 185.345 Z"
            fill="#333333"
          />
        </Group>
      </svg>
      <Group left={CATEGORY_LABEL_WIDTH} top={5.5}>
        <Line
          from={{
            x: navPoints[0].x,
            y: 5,
          }}
          to={{
            x: navPoints[navPoints.length - 1].x,
            y: 5,
          }}
          style={{ stroke: '#EDEDED', strokeWidth: 6 }}
        />
        {navPoints.map(({ header, x }, index) => (
          <Group
            key={`nav-point-${header}`}
            left={x}
            top={5}
            onClick={() => setActivePoint(index)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <Circle r={6} fill="#FFFFFF" style={{ stroke: '#999999', strokeWidth: 1 }} />
            {index === activePoint && (
              <>
                <Circle x={1} y={1} r={5} fill="#4287f5" />
                <Text
                  fontSize={11}
                  y={20}
                  width={60}
                  fontFamily="Roboto"
                  fill="#333333"
                  textAnchor="middle"
                  verticalAnchor="middle"
                >
                  {header}
                </Text>
              </>
            )}
          </Group>
        ))}
      </Group>
    </Group>
  );
};
