import React from "react";

export default function Banner({ banner: { message, state } }) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "⛔️";

  return (
    <div
      className={`bg-gray-200 p-2 my-3 rounded-md text-xs font-content ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {`${icon} ${message}`}
    </div>
  );
}
