import React from "react";
import { Link } from "react-router-dom";

export default function SectionImage({ image }) {
  return (
    <>
      <div className="ass1-section__image">
        <Link to="/">
          <img src={image } alt="" />
        </Link>
      </div>
    </>
  );
}
