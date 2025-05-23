import * as React from 'react';
import { ParentSize } from '@visx/responsive';
import { ChartComponent } from './chart';
import { ChartProps } from './types';
import { MIN_HEIGHT, MIN_WIDTH } from './consts';

export const BarChart: React.FC<ChartProps> = ({ categories, data, dataParams }) => (
  <ParentSize>
    {({ width, height }) => (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {width >= MIN_WIDTH && (
          <ChartComponent
            width={width}
            height={Math.max(height, MIN_HEIGHT)}
            categories={categories}
            data={data}
            dataParams={dataParams}
          />
        )}
      </>
    )}
  </ParentSize>
);
