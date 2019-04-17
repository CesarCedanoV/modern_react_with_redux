import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

  renderError({touched, error}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  renderInput = ({input, meta, label}) =>{
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field component={this.renderInput} name="title" label="Enter Title"/>
        <Field component={this.renderInput} name="description"label="Enter Descriptio"/>
        <button className="ui button primary">Submit</button>
        <Link to="/" className="ui button danger">Cancel</Link>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = "Title is a required field";
  }
  if (!formValues.description) {
    errors.description = "Description is a required field";
  }
  return errors
}

const formWrapped =  reduxForm({
  form:'streamCreate',
  validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);