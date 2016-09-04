import React                from 'react';
import { connect }          from 'react-redux';
import classnames           from 'classnames';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/topics';
import TopicRow            from '../../components/topics/row';
class HomeIndexView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Topics');

    const { dispatch } = this.props;
    dispatch(Actions.fetchTopics());
  }

  componentWillUnmount() {
    this.props.dispatch(Actions.reset());
  }

  _renderOwnedTopics() {
    const { fetching } = this.props;

    let content = false;

    const iconClasses = classnames({
      fa: true,
      'fa-user': !fetching,
      'fa-spinner': fetching,
      'fa-spin':    fetching,
    });

    if (!fetching) {
      content = (
        <div className="topics-wrapper">
          {::this._renderTopics(this.props.ownedTopics)}
          {/*{::this._renderAddNewTopic()} */}
        </div>
      );
    }

    return (
      <section>
        <header className="view-header">
          <h3><i className={iconClasses} /> My Topics</h3>
        </header>
        {content}
      </section>
    );
  }

  _renderTopics(topics) {
    return topics.map((topic) => {
      return <TopicRow
                key={topic.id}
                dispatch={this.props.dispatch}
                {...topic} />;
    });
  }

  render() {
    return (
      <div className="view-container boards index">
        {::this._renderOwnedTopics()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.topics
);

export default connect(mapStateToProps)(HomeIndexView);
