import React from 'react';
import {connect} from 'react-redux';
import {update} from '../../redux/rootReducer';
import {Current_City_Name} from '../../config/localStorageKey';
import localStorage from '../../utils/localStorage';
import Header from './Header';

class Layout extends React.Component {

  state = {
    isDone: false
  }

  componentDidMount() {
    const cityName = localStorage.getItem(Current_City_Name);
    this.props.update(cityName || '北京');
  }

  render() {
    const {isDone} = this.state;
    const {children} = this.props;

    return (
      <div>
        <Header/>
        {isDone ? children : '正在加载...'}
      </div>
    );
  }

}

export default connect(
  null,
  dispatch => ({
    update: data => dispatch(update(data))
  })
)(Layout);