import React from "react";

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  return `${day}${daySuffix} ${month}, ${year}`;
};

const DisplayTodaydate = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return <div>{`${formattedDate}`}</div>;
};

export default DisplayTodaydate;
