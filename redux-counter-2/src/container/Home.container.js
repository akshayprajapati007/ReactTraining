import Home from "../components/Home";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../Redux/index";
import { compose } from "redux";

export const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    incementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
  };
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(Home);
