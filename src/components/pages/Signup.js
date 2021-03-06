import React, { Component } from "react";
import "../../../src/App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
  render() {
    return (
      <Form className="Signup-form">
        <h1 className="text-center">
          <span className="font-weight-bold">Sign Up</span>
        </h1>
        <h9>Please fill in this form to create an account!</h9>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Name" required />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" placeholder="Last Name" required />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" required />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" required />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Sign Up</Button>
      </Form>
    );
  }
}

export default Signup;
