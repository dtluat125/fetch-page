import React from "react";
import SignUpButton from "../Home-desktop/Trusted Cus/SignUpButton";

function Available() {
  return (
    <div className="available">
      <div className="available__inner row">
        <div className="available__right col-md-10">
          <div className="available__title">Available Positions</div>
          <div className="available__text">
            Be part of our growing network of satisfied partners
          </div>
        </div>
        <div className="available__left col-md-2">
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}

export default Available;
