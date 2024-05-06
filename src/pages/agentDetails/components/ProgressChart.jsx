import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressChart = ({
  title,
  extraTitle,
  value,
  minLimit,
  maxLimit,
  pathColor,
  trailColor,
  extraText,
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Ensure that the value is within the specified limits
    const normalizedValue = Math.min(
      Math.max(value, minLimit || 0),
      maxLimit || 100
    );

    // Calculate the percentage completion based on the new maxLimit
    const newMaxLimit = maxLimit || 100;
    const newPercentage = (normalizedValue / newMaxLimit) * 100;

    setPercentage(newPercentage);
  }, [value, minLimit, maxLimit]);

  return (
    <div className="w-[10rem] h-[10rem] text-center">
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          pathColor: pathColor || "#CB1600",
          trailColor: trailColor || "#F5C8C3",
        })}
      >
        <div className="flex flex-row items-center justify-center h-full">
          <div className="border-s-[3.08px] border-orange text-start rounded-sm px-1">
            <h4 className="text-[#4E5969]">{title}</h4>
            <span className="text-lg text-grey-900 font-semibold">
              {value} {extraText}
            </span>
          </div>
        </div>
      </CircularProgressbarWithChildren>
      <h4 className="my-3 text-[#4E5969]">{extraTitle}</h4>
    </div>
  );
};

export default ProgressChart;
