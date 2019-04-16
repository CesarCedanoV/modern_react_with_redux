import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({input, label}){
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field component={this.renderInput} name="title" label="Enter Title"/>
        <Field component={this.renderInput} name="description"label="Enter Descriptio"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

export default reduxForm({
  form:'streamCreate'
})(StreamCreate);