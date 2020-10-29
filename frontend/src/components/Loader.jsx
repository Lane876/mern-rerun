import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="warning"
      role="status"
      style={{
        position: "absolute",
        width: "100px",
        height: "100px",
        top: "40%",
        left: "50%",
        marginLeft: "-50px",
        marginRight: "-50px",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
