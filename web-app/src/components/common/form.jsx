import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./Select";
import AlertLine from "./AlertLine";
class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("Submit inner");

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary btn-block">
        {label}
      </button>
    );
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
      />
    );
  }

  renderAlert(type) {
    const { errors } = this.state;
    return (
      errors[alert] && <AlertLine alertType={type} message={errors[alert]} />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
      />
    );
  }
}

export default Form;
