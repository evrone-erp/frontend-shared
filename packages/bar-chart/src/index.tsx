import * as React from 'react';
import { ParentSize } from '@visx/responsive';
import { ChartComponent } from './chart';
import { ChartProps } from './types';

const MIN_WIDTH = 720;
const MIN_HEIGHT = 350;

export const BarChart: React.FC<ChartProps> = ({ categories, data, dataParams }) => {
  return (
    <ParentSize >
      {({ width, height }) => (
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
};
