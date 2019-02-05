import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Autocomplete from 'react-google-autocomplete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_number: "",
      nameError: "",
      emailError: "",
      phoneError: "",
      address:""
    };
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };
  handlePhoneChange = event => {
    this.setState(
      { phone_number: event.target.value },
      () => this.validatePhone
    );
  };

  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        name.length > 4 ? null : "Name must be longer than 4 characters"
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 3 ? null : "Email must be longer than 3 characters"
    });
  };

  validatePhone = () => {
    const { phone_number } = this.state;
    this.setState({
      phoneError:
        phone_number.length ==10 ? null : "Phone number must be l0 Numbers"
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, phone_number } = this.state;
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email} \n
            phone_number: ${phone_number}\n
           `);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className={`form-control ${
              this.state.nameError ? "is-invalid" : ""
            }`}
            id="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleNameChange}
            onBlur={this.validateName}
          />
          <div className="invalid-feedback">{this.state.nameError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className={`form-control ${
              this.state.emailError ? "is-invalid" : ""
            }`}
            id="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.validateEmail}
          />
          <div className="invalid-feedback">{this.state.emailError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            name="phone_number"
            className={`form-control ${
              this.state.phoneError ? "is-invalid" : ""
            }`}
            id="phone_number"
            placeholder="Enter phoneNumber"
            value={this.state.phone_number}
            onChange={this.handlePhoneChange}
            onBlur={this.validatePhone}
            minLength="10"
            maxLength="10"
          />
          <div className="invalid-feedback">{this.state.phoneError}</div>
        </div>
        <div className="form-group">
<label>City</label>
<Autocomplete className="form-control" onPlaceSelected={place=>{
    this.setState({address:place.formatted_address});
}}

type={["(regions)"]}
componentRestrictions={{country:"in"}}
/>
</div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default App;