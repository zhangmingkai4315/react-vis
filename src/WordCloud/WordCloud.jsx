import React from 'react';

export default class WordCloud extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  render() {
    return (
      <div>I am a world Cloud</div>
    );
  }
}
WordCloud.propTypes = {
  data: React.PropTypes.object,
}