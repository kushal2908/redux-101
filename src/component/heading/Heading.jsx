import React from "react";

export default function Heading({ title }) {
  return (
    <>
      <div className="title">
        <h5 class="display-5">{title}</h5>
      </div>
    </>
  );
}
