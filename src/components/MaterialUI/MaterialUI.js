import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import './MaterialUI.scss'

class MaterialUi extends Component {
  render() {
    return (
      <div className='MaterialUI'>
        <FormGroup>
          <FormLabel>Material UI Mini Form</FormLabel>
          <FormControl>
            <InputLabel>Enter name</InputLabel>
            <Input/>
          </FormControl>
          <FormControl>
            <InputLabel>Enter email</InputLabel>
            <Input/>
          </FormControl>
          <Button
            className='MaterialUI-Button'
            variant={'contained'}
            color={'primary'}>Submit</Button>
        </FormGroup>
      </div>
    );
  }
}

export default MaterialUi;