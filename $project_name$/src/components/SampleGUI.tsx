import React from "react";
import icon from "../public/assets/images/tmt_favicon.ico";

const SampleGUI = () => {
  return (
    <div>
      <img className="icon" src={icon} />
      <h3>Update src/App.tsx and save to reload.</h3>
      <h3>
        Refer esw-ts library usage from <a
          className="link"
          href="https://github.com/tmtsoftware/esw-ts"
        >
          here.
        </a>
      </h3>
    </div>
  );
};

export default SampleGUI;
