import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './Bootstrap.scss';

class Bootstrap extends Component {

  onButtonClick = (e) => e.preventDefault();

  render() {
    return (
      <Form>
        <Alert variant={'primary'}>React Bootstrap Mini Form </Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={this.onButtonClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default Bootstrap;