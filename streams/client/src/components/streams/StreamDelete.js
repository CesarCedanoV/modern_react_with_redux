import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';

class StreamDelete extends React.Component {

  renderActionBtns () {
    return  (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui negative button">Delete</button>
        <button 
          onClick={() => history.goBack()}
            className="ui button">Cancel</button>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Modal 
        header="Delete stream"
        content={`Are you sure you want to delete the Stream #${this.props.match.params.id}?`}
        actionBtns={this.renderActionBtns()}
        onDismiss={history.goBack}
        />
    );
  } 
}



export default connect(null,{deleteStream})(StreamDelete);