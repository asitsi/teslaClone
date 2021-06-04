import React from "react";
import DownArrow from "../images/down-arrow.svg";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  return (
    <div
      className="Wrap"
      style={{ backgroundImage: `url(${props.backgroundImg})` }}
    >
      <Fade bottom>
        <div className="item_text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </Fade>
      <div className="">
        <Fade bottom>
          <div className="item_buttom">
            <div className="leftButton">{props.leftButton}</div>
            {props.rightButton && (
              <div className="RightButton">{props.rightButton}</div>
            )}
          </div>
        </Fade>
        <div>
          <img src={DownArrow} alt="svgImg" className="DownArrow" />
        </div>
      </div>
    </div>
  );
};

export default Section;
