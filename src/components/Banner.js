import React from "react";

const Banner = (props) => {
  const { itemSource } = props;
  const { headerText, description, className } = itemSource;
  return (
    <li className={`${className} classList`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="showMoreBtn" type="button">
          Show More
        </button>
      </div>
    </li>
  );
};
export default Banner;
