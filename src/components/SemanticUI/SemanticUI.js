import React, {Component} from 'react';
import { Form, Checkbox, Button, Label } from 'semantic-ui-react';
import './SemanticUI.scss'

class SemanticUi extends Component {
  render() {
    return (
        <Form>
          <Label>Semantic UI Mini Form</Label>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
    );
  }
}

export default SemanticUi;