import React from "react";

function RedTheme(props) {
  return (
    <div className="available">
      <div className="available__inner row">
        <div className="available__right col-md-10">
          <div className="c-h3-title c-h3-title--maintain available__title">{props.title}</div>
          <div className="available__text">
            {props.subtitle}
          </div>
        </div>
        <div className="available__left col-md-2">
          <div className="c-large-button" role="button">{props.buttonText}</div>
        </div>
      </div>
    </div>
  );
}

export default RedTheme;
