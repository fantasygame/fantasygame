import React, {PropTypes} from 'react';
import { push }           from 'react-router-redux';

export default class PostRow extends React.Component {
  _handleClick() {
    console.log(`Clicked ${this.props.id}`);
  }

  render() {
    return (
      <div id={this.props.id} className="post" onClick={::this._handleClick}>
        <div className="inner">
          <h4>{this.props.topic.title}</h4>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

PostRow.propTypes = {
};
