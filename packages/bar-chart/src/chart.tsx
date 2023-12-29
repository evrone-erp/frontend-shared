import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { scaleBand, scaleLinear, scaleThreshold } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { Bar, Circle, Line } from '@visx/shape';
import { Text } from '@visx/text';
import { Category, ChartProps, DataElement, NavPoint } from './types';
import { CATEGORY_LABEL_WIDTH, MAX_BAR_WIDTH, NAV_HEIGHT, UNKNWON_COLOR, X_AXIS_HEIGHT, ZERO_BAR_HEIGHT } from './consts';


type Margin = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

const margin: Margin = {
  top: 40,
  bottom: 40,
  right: 0,
  left: 0,
}


export const ChartComponent: React.FC<ChartProps> = ({
  width,
  height,
  categories,
  data,
  dataParams,
}) => {
  const maxValue = useMemo(() => {
    return categories[categories.length - 1].maxValue;
  }, [categories])
  
  
  //getters
  const getDataLabel = ((dataElement: DataElement) => dataElement.label);
  const getCategoryColor = ((category: Category) => category.color);
  const getCategoryLineColor = ((category: Category) => category.lineColor);
  const getCategoryMaxValue = ((category: Category) => category.maxValue);
  
  
  // bounds
  const chartWidth = width - (margin.left + margin.right);
  const chartHeight = height - (margin.top + margin.bottom) - NAV_HEIGHT - X_AXIS_HEIGHT;
  
  const categoriesLabelsColors = useMemo(() => (
    categories.map(getCategoryColor)
  ), [categories]);

  const categoriesLinesColors = useMemo(() => (
    categories.map(getCategoryLineColor)
  ), [categories]);

  const yScale = useMemo(() => {
    return scaleLinear({
      domain: [0, categories[categories.length - 1].maxValue],
      range: [chartHeight, 0],
      
    });
  }, [categories, chartHeight]); 

  const navScale = useMemo(() => {
    return scaleBand({
      domain: data.map(getDataLabel),
      range: [0, chartWidth - CATEGORY_LABEL_WIDTH],
      padding: 0.2,
      align: 0,
      round: true,
    });
  }, [chartWidth, data]);

  const barColorScale = useCallback((value: number) => {
    return dataParams.find((param) => value <= param.value)?.color;
  }, [dataParams]);

  const barLabelScale = useCallback((value: number) => {
    return dataParams.find((param) => value <= param.value)?.label;
  }, [dataParams]);

  const navPoints = useMemo(() => (
    data.reduce((navPoints, { label, values }, dataIndex) => {
      if (values.length > 1) {
        const navSubScale = scaleBand({
          domain: Array.from(Array(values.length).keys()),
          range: [0, navScale.bandwidth()],
        });
  
        const nextNavPoints = values.map(({ header }, index) => {
          if (typeof header === 'undefined') {
            return false;
          }
          
          return {
            dataIndex,
            header,
            label,
            x: navScale(label)! + navSubScale(index)! + navSubScale.bandwidth() / 2,
          };
        }).filter((navPoint) => navPoint) as NavPoint[];
  
        return [...navPoints, ...nextNavPoints];
      }

      if (typeof values[0].header !== 'undefined') {
        return [
          ...navPoints,
          {
            dataIndex,
            label,
            header: values[0].header,
            x: navScale(label)! + navScale.bandwidth() / 2,
          }
        ];
      }

      if (dataIndex === data.length - 1) {
        return [
          ...navPoints,
          {
            dataIndex,
            label,
            header: label,
            x: navScale(label)! + navScale.bandwidth() / 2,
          },
        ];
      }

      return navPoints;
    }, [] as NavPoint[])
  ), [data, navScale]);

  const [activeNavPointIndex, setActiveNavPointIndex] = useState(navPoints.length - 1);

  useEffect(() => {
    setActiveNavPointIndex(navPoints.length - 1);
  }, [navPoints]);

  const handleMoveBack = useCallback(() => {
    setActiveNavPointIndex((state) => {
      if (state > 0) {
        return state - 1;
      }

      return state;
    })
  }, []);

  const handleMoveForward = useCallback(() => {
    setActiveNavPointIndex((state) => {
      if (state < navPoints.length - 1) {
        return state + 1;
      }

      return state;
    })
  }, [navPoints.length]);

  const scaleMaxBarCount = useMemo(() => (
    scaleThreshold<number, number>({
      domain: [900, 1200, 1400],
      range: [5, 7, 9, 11],
    })
  ), []);

  
  const [needNav, visibleData] = useMemo(() => {
    const maxBarCount = scaleMaxBarCount(chartWidth);
    
    if (maxBarCount >= data.length) {
      return [false, data];
    }

    const sideRangeSize = Math.floor(maxBarCount / 2);
    const visibleDataIndex = navPoints[activeNavPointIndex].dataIndex;
    
    let sliceStart = Math.max(visibleDataIndex - sideRangeSize, 0);
  
    let sliceEnd: number | undefined = sliceStart === 0
      ? Math.min(sliceStart + maxBarCount, data.length)
      : Math.min(visibleDataIndex + sideRangeSize + 1, data.length);
    
    if (sliceEnd === data.length) {
      sliceStart = Math.max(sliceEnd - maxBarCount, 0);
      sliceEnd = undefined;
    }


    return [true, data.slice(sliceStart, sliceEnd)];
  }, [scaleMaxBarCount, chartWidth, navPoints, activeNavPointIndex, data]);


  const xScale = useMemo(() => {
    return scaleBand({
      domain: visibleData.map(getDataLabel),
      range: [0, Math.min(chartWidth - CATEGORY_LABEL_WIDTH, MAX_BAR_WIDTH * data.length)],
      padding: 0.2,
      align: 0,
      round: true,
    });
  }, [chartWidth, visibleData, data.length]);


  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill='#FFFFFF' rx={14} />
      <Group top={margin.top} left={margin.left}>
        {categories.map((category, index, array) => {
          const previousMaxValue = array[index - 1] ? array[index - 1].maxValue : 0;
          const lineYPositions = [0, ...categories.map(getCategoryMaxValue)];

          return (
            <Fragment key={`category-${category.label}`}>
              <Line
                from={{x: 0, y: yScale(lineYPositions[index])}}
                to={{x: chartWidth, y: yScale(lineYPositions[index])}}
                style={{ stroke: categoriesLinesColors[index], strokeWidth: 1 }}
              />
              <Text
                textAnchor="middle"
                verticalAnchor="middle"
                x={CATEGORY_LABEL_WIDTH / 2}
                y={yScale((category.maxValue + previousMaxValue) / 2)}
                fill={categoriesLabelsColors[index]}
                width={CATEGORY_LABEL_WIDTH}
                fontSize={12}
                fontFamily='Roboto'
              >
                {category.label}
              </Text>
            </Fragment>
          );
        })}
        <Group left={CATEGORY_LABEL_WIDTH}>
          <AxisBottom
            scale={xScale}
            top={chartHeight}
            numTicks={visibleData.length}
            stroke={categoriesLinesColors[0]}
            tickStroke='#FFFFFF'
            tickComponent={({ x, y, formattedValue }) => (
              <Text
                x={x}
                y={y}
                fontFamily='Roboto'
                textAnchor="middle"
                verticalAnchor="middle"
                fontSize={12}
                fontWeight={needNav && formattedValue === navPoints[activeNavPointIndex].label ? 700 : 400}
              >
                {formattedValue}
              </Text>
            )}
          />
          {visibleData.map(({ label, values }) => {
            const barWidth = xScale.bandwidth();

            const xSubScale = scaleBand({
              domain: Array.from(Array(values.length).keys()),
              range: [0, barWidth],
            });

            return (
              <Group left={xScale(label)} key={`bar-group-${label}`}>
                {values.map(({ value }, index, array) => {
                  const isUnknownValue = value === null;
                  const barHeight = isUnknownValue
                    ? chartHeight - yScale(maxValue)
                    : (chartHeight - yScale(value)) || ZERO_BAR_HEIGHT;
                  const barColor = isUnknownValue ? '#FFFFFF' : barColorScale(value);
                  const labelColor = isUnknownValue ? UNKNWON_COLOR : barColor;
                  const barLabel = isUnknownValue ? 'Unknown' : barLabelScale(value);
                  const barStyle = isUnknownValue ? { strokeWidth: 1, stroke: UNKNWON_COLOR } : undefined;

                  return (
                    <Fragment key={`bar-${label}-${index}`} >
                      <Bar
                        key={`bar-${label}-${index}`}
                        x={xSubScale(index)}
                        y={chartHeight - barHeight}
                        width={xSubScale.bandwidth() + 1}
                        height={barHeight}
                        fill={barColor}
                        style={barStyle}
                      />
                      {array.length === 1 && (
                        <Text
                          x={xSubScale.bandwidth() / 2}
                          y={chartHeight - barHeight - 18}
                          width={xSubScale.bandwidth()}
                          fontFamily='Roboto'
                          fill={labelColor}
                          textAnchor="middle"
                          verticalAnchor="middle"
                          fontSize={12}
                        >
                          {barLabel}
                        </Text>
                      )}
                      {isUnknownValue && (
                        <rect
                          x={xSubScale(index)}
                          y={chartHeight - 12}
                          width={xSubScale.bandwidth()}
                          height={12}
                          fill={UNKNWON_COLOR}
                        />
                      )}
                    </Fragment>
                    );
                  })}
              </Group>
            );
          })}
        </Group>
      </Group>
      {needNav && (
        <Group left={margin.left} top={margin.top + chartHeight + X_AXIS_HEIGHT}>
          <svg x={CATEGORY_LABEL_WIDTH/2 - 21} width={42} height={19} viewBox="0 0 412.289 186.109" xmlns="http://www.w3.org/2000/svg">
          <Group transform="matrix(-1, 0, 0, 1, 106.411006, 0.223)" onClick={handleMoveBack}>
              <rect y="-0.223" width="106.411" height="185.663" style={{ fill: "rgba(0, 0, 0, 0)", cursor: "pointer" }} />
              <path style={{ cursor: "pointer" }} d="M 11.565 185.345 C 8.703 185.348 5.958 184.217 3.94 182.203 C -0.273 178.024 -0.273 171.243 3.94 167.065 L 78.612 92.896 L 3.94 18.723 C -0.273 14.539 -0.273 7.762 3.94 3.584 C 8.152 -0.6 14.974 -0.6 19.185 3.584 L 101.472 85.321 C 105.684 89.505 105.684 96.282 101.472 100.46 L 19.185 182.202 C 17.168 184.216 14.424 185.347 11.565 185.345 Z" fill="#333333"/>
            </Group>
            <Group transform="matrix(1, 0, 0, 1, 305.878, 0.223)" onClick={handleMoveForward}>
              <rect y="-0.223" width="106.411" height="185.663" style={{ fill: "rgba(0, 0, 0, 0)", cursor: "pointer" }} />
              <path style={{ cursor: "pointer" }} d="M 11.565 185.345 C 8.703 185.348 5.958 184.217 3.94 182.203 C -0.273 178.024 -0.273 171.243 3.94 167.065 L 78.612 92.896 L 3.94 18.723 C -0.273 14.539 -0.273 7.762 3.94 3.584 C 8.152 -0.6 14.974 -0.6 19.185 3.584 L 101.472 85.321 C 105.684 89.505 105.684 96.282 101.472 100.46 L 19.185 182.202 C 17.168 184.216 14.424 185.347 11.565 185.345 Z" fill="#333333"/>
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
            {navPoints.map(({ header, x }, index) => {
                return (
                  <Group
                    key={`nav-point-${header}`}
                    left={x}
                    top={5}
                    onClick={() => setActiveNavPointIndex(index)}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    <Circle r={6} fill="#FFFFFF" style={{ stroke: "#999999", strokeWidth: 1 }} />
                    {index === activeNavPointIndex && (
                      <>
                        <Circle
                          x={1}
                          y={1}
                          r={5}
                          fill='#4287f5'
                        />
                        <Text
                          fontSize={11}
                          y={20}
                          width={60}
                          fontFamily='Roboto'
                          fill="#333333"
                          textAnchor="middle"
                          verticalAnchor="middle"
                        >
                          {header}
                        </Text>
                      </>
                    )}
                  </Group>
                );
            })}
          </Group>
        </Group>
      )}
    </svg>
  );
}
