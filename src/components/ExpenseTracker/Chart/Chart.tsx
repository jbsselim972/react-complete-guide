import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  const totalMaximum = Math.max(
    ...dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
