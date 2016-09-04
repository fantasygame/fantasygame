import React                from 'react';
import { connect }          from 'react-redux';
import classnames           from 'classnames';

import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/topics';
import PostActions          from '../../actions/posts';
import TopicRow             from '../../components/topics/row';
import PostRow              from '../../components/posts/row';
// import BoardForm            from '../../components/boards/form';

class HomeIndexView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Topics');

    const { dispatch } = this.props;
    // dispatch(Actions.fetchTopics());
    dispatch(PostActions.fetchPosts());
  }

  componentWillUnmount() {
    this.props.dispatch(Actions.reset());
  }

  render() {
    return (
      <div className="view-container boards index">
        {/* {::this._renderOwnedTopics()} */}
        {::this._renderPostFeed()}
      </div>
    );
  }

  _renderPostFeed() {
    const { fetching, posts } = this.props.posts;

    let content = false;

    if (!fetching) {
      content = (
        <div className="post-feed-wrapper">
          {::this._renderPosts(posts)}
        </div>
      )
    }

    return (
      <div>
        <h1>Post feed: </h1>
        {content}
      </div>
    )
  }

  _renderPosts(posts) {
    return posts.map((post) => {
      return <PostRow
                key={post.id}
                dispatch={this.props.dispatch}
                {...post} />;
    });
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

  // _renderAddNewBoard() {
  //   let { showForm, dispatch, formErrors } = this.props;

  //   if (!showForm) return this._renderAddButton();

  //   return (
  //     <BoardForm
  //       dispatch={dispatch}
  //       errors={formErrors}
  //       onCancelClick={::this._handleCancelClick}/>
  //   );
  // }

  // _renderOtherBoards() {
  //   const { invitedBoards } = this.props;

  //   if (invitedBoards.length === 0) return false;

  //   return (
  //     <section>
  //       <header className="view-header">
  //         <h3><i className="fa fa-users" /> Other boards</h3>
  //       </header>
  //       <div className="boards-wrapper">
  //         {::this._renderBoards(invitedBoards)}
  //       </div>
  //     </section>
  //   );
  // }

  // _renderAddButton() {
  //   return (
  //     <div className="board add-new" onClick={::this._handleAddNewClick}>
  //       <div className="inner">
  //         <a id="add_new_board">Add new board...</a>
  //       </div>
  //     </div>
  //   );
  // }

  // _handleAddNewClick() {
  //   let { dispatch } = this.props;

  //   dispatch(Actions.showForm(true));
  // }

  // _handleCancelClick() {
  //   this.props.dispatch(Actions.showForm(false));
  // }
}

const mapStateToProps = (state) => ({
  topics: state.topics,
  posts: state.posts,
});

export default connect(mapStateToProps)(HomeIndexView);
