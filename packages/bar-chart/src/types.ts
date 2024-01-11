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



export type Margin = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export type NavPoint = {
  dataIndex: number,
  label: string,
  header: string,
  x: number,
};

export type ChartProps = {
  width: number;
  height: number;
  categories: Category[];
  data: DataElement[];
  dataParams: DataParameter[];
  margin?: Partial<Margin>;
};

export type NavigationProps = {
  show?: boolean;
  margin: Margin;
  navPoints: NavPoint[];
  activePoint: number;
  chartHeight: number;
  setActivePoint: (point: number) => void;
  onForward: () => void;
  onBack: () => void;
};

export type BarChartProps = Omit<ChartProps, 'width' | 'height'>;
