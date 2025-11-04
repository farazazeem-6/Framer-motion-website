import React from "react";

function PageWrapper({ children }) {
  const pageWrapper = {
    paddingTop: "160px",
    backgroundColor: "var(--mobile-menu-bg)",
  };
  return <div style={pageWrapper}>{children}</div>;
}

export default PageWrapper;
