import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="flex w-full bg-[#162950] rounded-full">
      <div
        className={`h-8 rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
