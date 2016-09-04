import React, {PropTypes} from 'react';
import { push }           from 'react-router-redux';

export default class TopicRow extends React.Component {
  _handleClick() {
    console.log(`Clicked ${this.props.id}`);
  }

  render() {
    return (
      <div id={this.props.id} className="topic" onClick={::this._handleClick}>
        <div className="inner">
          <h4>{this.props.title}</h4>
        </div>
      </div>
    );
  }
}

TopicRow.propTypes = {
};
