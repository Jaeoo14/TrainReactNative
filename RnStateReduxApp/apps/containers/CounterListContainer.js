/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';

import App from '../components/App';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (index) => dispatch(actions.increment(index)), //값을 증가
    handleDecrement: (index) => dispatch(actions.decrement(index)), //값을 감소
    handleAddCounter: () => dispatch(actions.add()),
    handleRemoveCounter: () => dispatch(actions.remove()),
});

//connect(state, action들을 위한 매핑값)(Presentation[Component dir] comp연결);
const CounterListContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App);

export default CounterListContainer;