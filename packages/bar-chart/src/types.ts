export type Category = {
  label: string;
  color: string;
  lineColor: string;
  maxValue: number;
};

export type DataValue = {
  header?: string;
  value: number | null;
};

export type DataElement = {
  values: DataValue[];
  label: string;
  header?: string;
};

export type DataParameter = {
  value: number;
  color: string;
  label: string;
};

export type ChartProps = {
  width: number;
  height: number;
  categories: Category[];
  data: DataElement[];
  dataParams: DataParameter[];
};

export type BarChartProps = Omit<ChartProps, 'width' | 'height'>;

export type NavPoint = {
  dataIndex: number,
  label: string,
  header: string,
  x: number,
};
