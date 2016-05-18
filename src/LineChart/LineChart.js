import React from 'react';
import uuid from 'uuid';
export default class LineChart extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div><h2>{this.props.title}</h2></div> 
        <div id={uuid.v1()}></div>
      </div>
    );
  }
}

LineChart.propTypes = {
  data: React.PropTypes.array,
  title: React.PropTypes.string,
};
LineChart.defaultProps = {
  title: 'React Line Chart Bar',
  data: [{
    num: 1,
    line1: 20,
    line2: 14,
    line3: 12,
  }, {
    num: 2,
    line1: 22,
    line2: 20,
    line3: 14,
  }, {
    num: 3,
    line1: 24,
    line2: 32,
    line3: 14,
  }, {
    num: 4,
    line1: 25,
    line2: 23,
    line3: 20,
  }, {
    num: 5,
    line1: 12,
    line2: 40,
    line3: 32,
  }, {
    num: 6,
    line1: 30,
    line2: 14,
    line3: 20,
  }],
};

