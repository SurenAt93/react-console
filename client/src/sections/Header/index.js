import React from 'react';

// Third-Party Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';

import { Link } from 'react-router-dom';

// Styles
import './index.scss';

const TopBar = props => (
  <div className="header">
    <AppBar position="absolute">
      <Toolbar className="header__navigation">
        <Button
          component={Link}
          to="/"
          className="header__navigation--home"
        >
          <img
            src="icons/web_hi_res_512.png"
            alt="portal_icon"
            width="40"
          />
        </Button>
        <Typography
          variant="title"
          color="inherit"
          className="header__navigation__title"
        >
          Portal
        </Typography>
        <Button
          component={Link}
          to="/sce"
          className="header__navigation--file-manager"
        >
          <FolderIcon />
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

TopBar.propTypes = {
  // This component doesn't expect any props from outside (until nowadays)
};

export default TopBar;
