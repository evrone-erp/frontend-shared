import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { scaleBand, scaleLinear, scaleThreshold } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { Bar, Line } from '@visx/shape';
import { Text } from '@visx/text';
import type { Category, ChartProps, DataElement, NavPoint } from './types';
import {
  CATEGORY_LABEL_WIDTH,
  MAX_BAR_WIDTH,
  NAV_HEIGHT,
  UNKNWON_COLOR,
  X_AXIS_HEIGHT,
  ZERO_BAR_HEIGHT,
  DEFAULT_MARGIN,
} from './consts';
import { Navigation } from './navigation';

// getters
const getDataLabel = (dataElement: DataElement) => dataElement.label;
const getCategoryColor = (category: Category) => category.color;
const getCategoryLineColor = (category: Category) => category.lineColor;
const getCategoryMaxValue = (category: Category) => category.maxValue;

export const ChartComponent: React.FC<ChartProps> = ({ width, height, categories, data, dataParams, margin = {} }) => {
  const maxValue = useMemo(() => categories[categories.length - 1].maxValue, [categories]);
  const chartMargin = useMemo(
    () => ({
      ...DEFAULT_MARGIN,
      ...margin,
    }),
    [margin],
  );

  // bounds
  const chartWidth = width - (chartMargin.left + chartMargin.right);
  const chartHeight = height - (chartMargin.top + chartMargin.bottom) - NAV_HEIGHT - X_AXIS_HEIGHT;

  const categoriesLabelsColors = useMemo(() => categories.map(getCategoryColor), [categories]);

  const categoriesLinesColors = useMemo(() => categories.map(getCategoryLineColor), [categories]);

  const yScale = useMemo(
    () =>
      scaleLinear({
        domain: [0, categories[categories.length - 1].maxValue],
        range: [chartHeight, 0],
      }),
    [categories, chartHeight],
  );

  const navScale = useMemo(
    () =>
      scaleBand({
        domain: data.map(getDataLabel),
        range: [0, chartWidth - CATEGORY_LABEL_WIDTH],
        padding: 0.2,
        align: 0,
        round: true,
      }),
    [chartWidth, data],
  );

  const barColorScale = useCallback(
    (value: number) => dataParams.find((param) => value <= param.value)?.color,
    [dataParams],
  );

  const barLabelScale = useCallback(
    (value: number) => dataParams.find((param) => value <= param.value)?.label,
    [dataParams],
  );

  const navPoints = useMemo(
    () =>
      data.reduce((navPointsAcc, { label, values }, dataIndex) => {
        if (values.length > 1) {
          const navSubScale = scaleBand({
            domain: Array.from(Array(values.length).keys()),
            range: [0, navScale.bandwidth()],
          });

          values.forEach(({ header }, index) => {
            if (typeof header !== 'undefined') {
              navPointsAcc.push({
                dataIndex,
                header,
                label,
                x: navScale(label)! + navSubScale(index)! + navSubScale.bandwidth() / 2,
              });
            }
          });

          return navPointsAcc;
        }

        if (dataIndex === data.length - 1 || typeof values[0].header !== 'undefined') {
          return [
            ...navPointsAcc,
            {
              dataIndex,
              label,
              header: values[0].header || label,
              x: navScale(label)! + navScale.bandwidth() / 2,
            },
          ];
        }

        return navPointsAcc;
      }, [] as NavPoint[]),
    [data, navScale],
  );

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
    });
  }, []);

  const handleMoveForward = useCallback(() => {
    setActiveNavPointIndex((state) => {
      if (state < navPoints.length - 1) {
        return state + 1;
      }

      return state;
    });
  }, [navPoints.length]);

  const scaleMaxBarCount = useMemo(
    () =>
      scaleThreshold<number, number>({
        domain: [900, 1200, 1400],
        range: [5, 7, 9, 11],
      }),
    [],
  );

  const [needNav, visibleData] = useMemo(() => {
    const maxBarCount = scaleMaxBarCount(chartWidth);

    if (maxBarCount >= data.length) {
      return [false, data];
    }

    const sideRangeSize = Math.floor(maxBarCount / 2);
    const visibleDataIndex = navPoints[activeNavPointIndex].dataIndex;

    let sliceStart = Math.max(visibleDataIndex - sideRangeSize, 0);

    let sliceEnd: number | undefined =
      sliceStart === 0
        ? Math.min(sliceStart + maxBarCount, data.length)
        : Math.min(visibleDataIndex + sideRangeSize + 1, data.length);

    if (sliceEnd === data.length) {
      sliceStart = Math.max(sliceEnd - maxBarCount, 0);
      sliceEnd = undefined;
    }

    return [true, data.slice(sliceStart, sliceEnd)];
  }, [scaleMaxBarCount, chartWidth, navPoints, activeNavPointIndex, data]);

  const xScale = useMemo(
    () =>
      scaleBand({
        domain: visibleData.map(getDataLabel),
        range: [0, Math.min(chartWidth - CATEGORY_LABEL_WIDTH, MAX_BAR_WIDTH * data.length)],
        padding: 0.2,
        align: 0,
        round: true,
      }),
    [chartWidth, visibleData, data.length],
  );

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill="#FFFFFF" rx={14} />
      <Group top={chartMargin.top} left={chartMargin.left}>
        {categories.map((category, index, array) => {
          const previousMaxValue = array[index - 1] ? array[index - 1].maxValue : 0;
          const lineYPositions = [0, ...categories.map(getCategoryMaxValue)];

          return (
            <Fragment key={`category-${category.label}`}>
              <Line
                from={{ x: 0, y: yScale(lineYPositions[index]) }}
                to={{ x: chartWidth, y: yScale(lineYPositions[index]) }}
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
                fontFamily="Roboto"
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
            tickStroke="#FFFFFF"
            tickComponent={({ x, y, formattedValue }) => (
              <Text
                x={x}
                y={y}
                fontFamily="Roboto"
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
                  const barHeight =
                    value === null ? chartHeight - yScale(maxValue) : chartHeight - yScale(value) || ZERO_BAR_HEIGHT;
                  const barColor = value === null ? '#FFFFFF' : barColorScale(value);
                  const labelColor = value === null ? UNKNWON_COLOR : barColor;
                  const barLabel = value === null ? 'Unknown' : barLabelScale(value);
                  const barStyle = value === null ? { strokeWidth: 1, stroke: UNKNWON_COLOR } : undefined;

                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Fragment key={`bar-${label}-${index}`}>
                      <Bar
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
                          fontFamily="Roboto"
                          fill={labelColor}
                          textAnchor="middle"
                          verticalAnchor="middle"
                          fontSize={12}
                        >
                          {barLabel}
                        </Text>
                      )}
                      {value === null && (
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

      <Navigation
        show={needNav}
        margin={chartMargin}
        chartHeight={chartHeight}
        navPoints={navPoints}
        activePoint={activeNavPointIndex}
        setActivePoint={setActiveNavPointIndex}
        onForward={handleMoveForward}
        onBack={handleMoveBack}
      />
    </svg>
  );
};
