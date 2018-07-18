import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import App from '../imports/ui/App';

const theme = createMuiTheme({});

Meteor.startup(() => {
  render(
    <div>
      <App />
    </div>,
    document.getElementById('render-target')
  );
});
