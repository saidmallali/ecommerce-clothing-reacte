import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.style";

const WithSpinner = WarppedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WarppedComponent {...otherProps} />
  );
};

export default WithSpinner;
