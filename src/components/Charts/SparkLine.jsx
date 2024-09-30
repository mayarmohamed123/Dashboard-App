import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
  TrackLineSettings,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  console.log("SparkLine props:", {
    id,
    height,
    width,
    color,
    data,
    type,
    currentColor,
  });

  // Ensure data and props are valid before rendering
  if (!data || data.length === 0) {
    console.warn("SparkLine data is missing or empty");
    return null; // Return null or some fallback UI
  }
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : ${y}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
