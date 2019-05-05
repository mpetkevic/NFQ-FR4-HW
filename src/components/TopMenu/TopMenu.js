import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './TopMenu.scss';


const TopMenu = () => {
  return (
    <div className='TopMenu'>
      <RouterLink className='Home-link' to='/'>Home</RouterLink>
      <RouterLink to='/material-ui'>
        <Link>Material UI</Link>
      </RouterLink>
      <RouterLink to='/semantic-ui'>
        <Link>Semantic UI</Link>
      </RouterLink>
      <RouterLink to='/bootstrap'>
        <Link>React Bootstrap</Link>
      </RouterLink>
    </div>
  );
};

export default TopMenu;