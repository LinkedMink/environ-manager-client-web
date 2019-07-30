import { connect } from "react-redux";

import LoadingOverlay from "../Components/LoadingOverlay";

function mapStateToProps (state) {
  return {
    isLoading: state.loading.isLoading,
    message: state.loading.message
  };
}

const LoadingOverlayContainer = connect(mapStateToProps)(LoadingOverlay);

export default LoadingOverlayContainer;