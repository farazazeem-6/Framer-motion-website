import React from "react";

function PageWrapper({ children }) {
  const pageWrapper = {
    paddingTop: "160px",
    backgroundColor: "rgb(21,28,44)",
  };
  return <div style={pageWrapper}>{children}</div>;
}

export default PageWrapper;
