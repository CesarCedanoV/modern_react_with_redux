import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderRightAction(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated">
        <button className="ui button primary">
          <Link to={`/streams/edit`}>Update</Link>
        </button>
        <button className="ui button negative">
          <Link to={`/streams/delete`}>Delete</Link>
        </button>
        </div>
      )
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id} >
          {this.renderRightAction(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreateBtn() {
    if (this.props.isSignedIn) {
      return ( 
        <div>
          <Link to="/streams/new">Create Strem</Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateBtn()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);