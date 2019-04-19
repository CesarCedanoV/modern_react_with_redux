import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id,formValues);
  }

  render() {
    if (!this.props.stream){
      return <div><h4>Can't find that Stream</h4></div>
    }

    return (
      <div>
        <h3>Edit a Stream {this.props.stream.id}</h3>
        <StreamForm 
          onSubmit={this.onSubmit}
          initialValues={_.omit(this.props.stream, 'id','userId')}/> 
      </div>
    );
  }
};

const mapStateToProps = (state,ownProps) =>{
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchStream, updateStream})(StreamEdit);